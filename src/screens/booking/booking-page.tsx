import { useCallback, useMemo } from "react";
import BookingPageView from "./booking-page-view";
import { Screen } from "../../data/Screen";
import useNavigation from "../../hooks/useNavigation";
import { makeServiceKey } from "../../utils/BookingUtils";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/booking/bookingSlice";
import { AppDispatch } from "../../redux/store";
import { BOOKING_SERVICE_STEPS } from "../../data/BookingSteps/BookingServiceSteps";
import { useFocusEffect } from '@react-navigation/native';

const BookingPage = ({ navigation }: any) => {

  const nomService = useSelector((state: any) => state.serviceDetails.nomService);
  const currentStep = useSelector((state: any) => state.booking.currentStep);
  const shouldShowContinueBtn = useSelector((state: any) => state.booking.shouldShow);
  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const isContinueButtonDisabled = useSelector((state: any) => state.booking.isContinueButtonDisabled);

  const { setCurrentStep, setBookingData, setIsContinueBtnDisabled, resetBookingData } = actions;
  const { navigateToScreen } = useNavigation(navigation);
  const dispatch = useDispatch<AppDispatch>();

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(resetBookingData());
      }
    }, [])
  );
  const steps = useMemo(() => {
    const key = makeServiceKey(nomService) as keyof typeof BOOKING_SERVICE_STEPS;
    return BOOKING_SERVICE_STEPS[key] ? BOOKING_SERVICE_STEPS[key].steps : [];
  }, [nomService]);

  const progressPercentage = useMemo(() => {
    return steps.length > 0 ? currentStep / (steps.length - 1) : 0;
  }, [currentStep, steps.length]);

  const closeBookingPage = useCallback(() => {
    navigateToScreen(Screen.serviceDetails);
  }, []);

  const onNextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  }, [currentStep, steps.length]);

  const onPrevStep = useCallback(() => {
    dispatch(setIsContinueBtnDisabled(false));
    if (currentStep > 0) {
      dispatch(setCurrentStep(currentStep - 1));
    } else {
      navigateToScreen(Screen.serviceDetails);
    }
  }, [currentStep]);

  const handleChange = useCallback(({ key, value, isExigence = false }: { key: string, value: any, isExigence?: boolean }) => {

    let updatedData = {...bookingData};
    if (isExigence) {
      updatedData = { ...bookingData, exigences: [...bookingData.exigences, [key]] };
    }
    else if (value != null) {
      updatedData = { ...bookingData, [key]: value };
    }
    dispatch(setBookingData(updatedData));
  }, [steps[currentStep].stepKey]);

  const handleSearchJobbers = useCallback(() => {
    navigateToScreen(Screen.searchJobbers);
  }, []);

  const lastStep = currentStep === steps.length - 1;

  return (
    <BookingPageView
      closeBookingPage={closeBookingPage}
      isContinueButtonDisabled={isContinueButtonDisabled}
      lastStep={lastStep}
      handleSearchJobbers={handleSearchJobbers}
      nomService={nomService}
      onChange={handleChange}
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
      progressPercentage={progressPercentage}
      shouldShowContinueBtn={shouldShowContinueBtn}
      step={steps[currentStep]}
    />
  );
};

export default BookingPage;
