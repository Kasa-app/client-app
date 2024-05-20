import React from 'react';
import styles from './ask-user-email-style';
import { APP_TEXT } from '../../../data/AppText';
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import UserInput from '../../User-input/user-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithBackgroundColor from '../../Button-with-color-background/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  isContinueButtonDisabled: boolean,
  inputErrorText: string,
  isLoading: boolean,
  setIsContinueButtonDisabled: Function,
  handlePress: () => void,
  setEmail: Function,
  showInputError: boolean
};

const AskUserEmailView = ({
  isContinueButtonDisabled,
  inputErrorText,
  isLoading,
  setIsContinueButtonDisabled,
  handlePress,
  setEmail,
  showInputError
}: Props) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">

          <SafeAreaView>
            <View style={styles.inputContainer}>
              <UserInput
                holderText={APP_TEXT.authentification.signUp.email_place_holder_text}
                textBeingChanged={(text: string) => {
                  setIsContinueButtonDisabled(text.trim() === '');
                  setEmail(text);
                }}
                errorText={inputErrorText}
                showError={showInputError}
              />
              <View style={styles.buttonContainer}>
                <ButtonWithBackgroundColor
                  buttonWidth={styles.continueButton.width}
                  buttonText={APP_TEXT.authentification.signUp.continue_text}
                  shouldDisable={isContinueButtonDisabled}
                  handlePress={handlePress}
                />
                {isLoading && <ActivityIndicator size="small" color="#E67918" />}
              </View>
            </View>

          </SafeAreaView>

        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>

    </>
  );
}

export default AskUserEmailView;