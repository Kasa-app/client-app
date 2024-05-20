import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import styles from "./booking-page-styles";
import * as Progress from 'react-native-progress';
import ButtonWithBackgroundColor from "../../components/Button-with-color-background/button";
import { APP_TEXT } from "../../data/AppText";
import BookingStep from "../../components/Booking/BookingStep/booking-step";
import { BookingStepType } from "../../models/booking/BookingStepType";

type Props = {
  closeBookingPage: () => void;
  isContinueButtonDisabled: boolean;
  lastStep: boolean;
  handleSearchJobbers: () => void;
  nomService: string;
  onChange: ({ }: { key: string, value: any, isExigence?: boolean }) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  progressPercentage: number;
  shouldShowContinueBtn: boolean;
  step: BookingStepType;
};

const BookingPageView = ({
  closeBookingPage,
  isContinueButtonDisabled,
  lastStep,
  handleSearchJobbers,
  nomService,
  onChange,
  onNextStep,
  onPrevStep,
  progressPercentage,
  shouldShowContinueBtn,
  step
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-left"
          size={60}
          color="#E67918"
          onPress={onPrevStep}
        />
        <Progress.Bar
          progress={progressPercentage}
          color='#E67918'
          unfilledColor='black'
        />
        <Icon
          name="close"
          size={45}
          color="#E67918"
          onPress={closeBookingPage}
        />
      </View>
      <Text style={styles.nomService}>{nomService}</Text>
      <BookingStep
        step={step}
        onChange={onChange}
      />
      <View style={styles.buttonContainer}>
        {!lastStep && shouldShowContinueBtn && (
          <ButtonWithBackgroundColor
            buttonText={APP_TEXT.booking.continue}
            customButtonTextStyle={styles.buttonText}
            handlePress={onNextStep}
            shouldDisable={isContinueButtonDisabled}
            buttonWidth={styles.continueButton.width}
          />
        )}
        {lastStep && (
          <ButtonWithBackgroundColor
            buttonText={APP_TEXT.booking.search_jobber}
            customButtonTextStyle={styles.buttonText}
            handlePress={handleSearchJobbers}
            shouldDisable={isContinueButtonDisabled}
            buttonWidth={styles.continueButton.width}
          />
        )}
      </View>
    </View>
  );
};

export default BookingPageView;
