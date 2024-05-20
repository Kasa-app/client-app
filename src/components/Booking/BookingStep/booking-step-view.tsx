import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from './booking-step-styles';
import { BookingStepType } from "../../../models/booking/BookingStepType";

type Props = {
  step: BookingStepType;
  bookingData: any;
  handleChange: (value: any) => void;
};

const BookingStepView = ({
  bookingData,
  handleChange,
  step
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.stepperNameContainer}>
          <Text style={styles.stepperName}>{step.stepName}</Text>
          <View style={styles.inputContainer}>
            <step.component
              {...step.inputProps}
              stepKey = {step.stepKey}
              onChange={handleChange}
              value={bookingData[step.stepKey]}
            />
          </View >
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default BookingStepView;
