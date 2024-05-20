import { Text, TouchableOpacity, View } from "react-native";
import styles from "./count-styles";
import { useEffect, useRef } from "react";
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";
import { APP_TEXT } from "../../../data/AppText";

type Props = {
  onChange: (value: any) => void;
  stepKey: string
};
export const Count = ({ onChange, stepKey }: Props) => {

  const countValue = useRef(1);
  const { enableBtn } = HandleContinueBtn();
  useEffect(() => {
    onChange(countValue.current);
    enableBtn();
  }, [])

  const decreaseCount = () => {
    countValue.current >= 2 ? countValue.current-- : countValue.current;
    onChange(countValue.current);
  };

  const increaseCount = () => {
    switch (stepKey) {
      case APP_TEXT.booking.stepKey.jobber_counts:
        countValue.current <= 3 ? countValue.current++ : countValue.current;
        break;
      case APP_TEXT.booking.stepKey.estimated_duration:
        countValue.current <= 23 ? countValue.current++ : countValue.current;
        break;
    }
    onChange(countValue.current);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseCount}>
        <View style={styles.circleButton}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.nbrContainer}>
        <Text style={styles.nbrCountText}>
          {countValue.current}{stepKey === 'estimatedDuration' && 'h'}
        </Text>
      </View>

      <TouchableOpacity onPress={increaseCount}>
        <View style={styles.circleButton}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}