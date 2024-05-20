import { useCallback } from "react";
import { BookingStepType } from "../../../models/booking/BookingStepType";
import BookingStepView from "./booking-step-view";
import { useSelector } from "react-redux";

type Props = {
  onChange: ({ }: { key: string, value: any, isExigence?: boolean }) => void;
  step: BookingStepType;
};

const BookingStep = ({ onChange, step }: Props) => {

  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const handleChange = useCallback((value: any, isExigence?: boolean, priorityKey?: string) => {
    const key = priorityKey || step.stepKey;
    onChange({ key, value, isExigence });
  }, [onChange, step.stepKey]);

  return (
    <BookingStepView
      bookingData={bookingData}
      handleChange={handleChange}
      step={step}
    />
  );
};

export default BookingStep;
