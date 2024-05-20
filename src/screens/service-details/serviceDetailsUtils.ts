import { useDispatch, useSelector } from "react-redux";
import { actions as bookingActions } from "../../redux/booking/bookingSlice";
import { actions as serviceDetailsActions } from "../../redux/serviceDetails/serviceDetailsSlice";
import useNavigation from "../../hooks/useNavigation";
import { Screen } from "../../data/Screen";
import { useCallback, useEffect } from "react";

export const useBookingPageNavigation = ({ dispatch, nav }: any) => {

    const { setCurrentStep } = bookingActions;
    const { navigateToScreen } = useNavigation(nav);

    const goToBookingPage = useCallback(() => {
        dispatch(setCurrentStep(0));
        navigateToScreen(Screen.booking);
    }, [dispatch, setCurrentStep, navigateToScreen]);

    return { goToBookingPage };
};