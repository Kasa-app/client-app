import React, { useCallback, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import styles from './date-time-picker-styles';
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";

type Props = {
  onChange: (value: any) => void;
  value: string;
};
const DateTimePickerInput = ({ onChange, value }: Props) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { enableBtn } = HandleContinueBtn();
  const padZero = (num: number) => (num < 10 ? `0${num}` : num);

  const handleChange = useCallback((event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    const day = padZero(selectedDate!.getDate());
    const month = padZero(selectedDate!.getMonth() + 1);
    const year = selectedDate!.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    onChange(formattedDate);
    enableBtn();
  }, [showDatePicker]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatepicker} style={styles.inputContainer}>
        <Text>{value || getCurrentDate()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode='date'
          value={new Date()}
          minimumDate={new Date()}
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerInput;
