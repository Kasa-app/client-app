import { useCallback, useEffect, useState } from "react";
import { Easing, Text, TouchableOpacity, View } from "react-native";
import styles from "./time-input-styles";
import { decreaseDurationByHalfAnHour, formatTime, increaseDurationByHalfAnHour, isMaxTimeExceeded, isMinTimeExceeded } from "../../../utils/BookingUtils";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { AppDispatch } from "../../../redux/store";
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";
import Toast from "react-native-toast-message";
import { APP_TEXT } from "../../../data/AppText";
import { Notifier, NotifierComponents } from 'react-native-notifier';
import { useToast } from "../../../hooks/useToast";


type Props = {
  isEstimatedService?: boolean;
  onChange: (value: any) => void;
  value: number;
};

const TimeInput = ({ isEstimatedService = false, onChange, value }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const estimatedServiceDuration = useSelector((state: any) => state.serviceDetails.estimatedServiceDuration);
  const bookingData = useSelector((state: any) => state.booking.bookingData);
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { enableBtn } = HandleContinueBtn();
  const {showToast} = useToast();

  useEffect(() => {
    if (isEstimatedService) {
      const estimatedDuration = value || estimatedServiceDuration;
      const hours = Math.floor(estimatedDuration) || 1;
      const minutes = (estimatedDuration - hours) === 0.5 ? 30 : 0;
      setDuration({ hours, minutes });
    } else {
      const time = bookingData.time || '08:00';
      const [hours, minutes] = time.split(':');
      setDuration({ hours: Number(hours), minutes: Number(minutes) });
    }
  }, [bookingData, estimatedServiceDuration]);

  const decreaseDuration = () => {
    const currentDuration = decreaseDurationByHalfAnHour(duration);
    const formattedTime = formatTime(currentDuration.hours, currentDuration.minutes);
    setDuration(currentDuration);
    onChange(formattedTime);
    enableBtn();
  };

  const increaseDuration = () => {
    const currentDuration = increaseDurationByHalfAnHour(duration);
    const formattedTime = formatTime(currentDuration.hours, currentDuration.minutes);
    setDuration(currentDuration);
    onChange(formattedTime);
    enableBtn();
  };

  const handleTimePickerChange = useCallback((event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    let hours = selectedDate!.getHours();
    let minutes = selectedDate!.getMinutes();

    if (isMaxTimeExceeded({ hours, minutes })) {
      hours = 21;
      minutes = 0;
      showToast(APP_TEXT.booking.steps.warning_time_max);
    }

    if (isMinTimeExceeded({ hours, minutes })) {
      hours = 6;
      minutes = 0;
      showToast(APP_TEXT.booking.steps.warning_time_min);
    }
    const currentDuration = { hours, minutes };
    setDuration(currentDuration);
    onChange(formatTime(currentDuration.hours, currentDuration.minutes));
    enableBtn();
  }, [showDatePicker]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseDuration}>
        <View style={styles.circleButton}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.durationContainer}>
        <TouchableOpacity onPress={() => { setShowDatePicker(true) }}>
          <Text style={styles.durationText}>
            {String(duration.hours).padStart(2, '0')}:{String(duration.minutes).padStart(2, '0')}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            mode="time"
            display="spinner"
            value={new Date()}
            is24Hour={true}
            onChange={handleTimePickerChange}
          />
        )}
      </View>

      <TouchableOpacity onPress={increaseDuration}>
        <View style={styles.circleButton}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TimeInput;
