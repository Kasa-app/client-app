import { View } from "react-native"
import ButtonWithBackgroundColor from "../../Button-with-color-background/button"
import ButtonWithoutBackground from "../../Button-without-color-background/button"
import styles from "./Question-styles"
import { actions } from "../../../redux/booking/bookingSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks"
import { useEffect } from "react"
import { ComeWithTruck } from "../../../models/booking/QuestionEnumValue"
import { APP_TEXT } from "../../../data/AppText"

type Props = {
  onChange: (value?: any, isExigence?: boolean) => void;
  stepKey: string
};
export const Question = ({ onChange, stepKey }: Props) => {
  const currentStep = useSelector((state: any) => state.booking.currentStep);
  const { setCurrentStep } = actions;
  const dispatch = useDispatch<AppDispatch>();
  const { hideBtn } = HandleContinueBtn();

  useEffect(() => {
    hideBtn();
  }, [])

  const nextStep = (index: number) => {
    if (stepKey == APP_TEXT.booking.stepKey.more_than_one_day) {
      index == 0 ? dispatch(setCurrentStep(currentStep + 3)) : dispatch(setCurrentStep(currentStep + 1));
    }
    else {
      index == 0 ? onChange(null) : onChange(null, true);
      dispatch(setCurrentStep(currentStep + 1));
    }
  }

  return (
    <View style={styles.container}>
      <ButtonWithBackgroundColor
        buttonWidth={styles.buttonTextColor.width}
        buttonHeight={styles.buttonTextColor.height}
        buttonText="Non"
        handlePress={() => nextStep(0)}
        shouldDisable={false} />

      <ButtonWithoutBackground handlePress={() => nextStep(1)} buttonTitle="Oui" buttonHeight="0"
        textColor={styles.buttonTextColor.color} textFontFamily={styles.buttonTextColor.fontFamily} />
    </View>

  )
}