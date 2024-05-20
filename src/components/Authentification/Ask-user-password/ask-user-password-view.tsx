import React from 'react';
import styles from './ask-user-password-style';
import { APP_TEXT } from '../../../data/AppText';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import UserInput from '../../User-input/user-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithBackgroundColor from '../../Button-with-color-background/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';

const AskUserPasswordView = ({
  isContinueButtonDisabled,
  checkboxValue,
  setPassword,
  setConfirmPassword,
  onCheckboxChange,
  handleCreateAccountPress,
  showPasswordMatchError,
  showPasswordSpecError
}: any) => {

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <SafeAreaView>
            <View style={styles.inputContainer}>

              <View style={styles.alignHorizontally}>
                <UserInput
                  isSecure={true}
                  holderText={APP_TEXT.authentification.signUp.password_place_holder_text}
                  textBeingChanged={(text: string) => {
                    setPassword(text);
                  }}
                />

              </View>
              <View style={styles.lastNameContainer}>
                <UserInput
                  isSecure={true}
                  holderText={APP_TEXT.authentification.signUp.confirmPassword_place_holder_text}
                  textBeingChanged={(text: string) => {
                    setConfirmPassword(text);
                  }}
                  errorText={showPasswordMatchError ?
                    APP_TEXT.authentification.signUp.password_not_match_error :
                    APP_TEXT.authentification.signUp.password_spec_error}
                  showError={showPasswordMatchError || showPasswordSpecError}
                />
              </View>

              <Text style={styles.passwordRestrictionText}>
                {APP_TEXT.authentification.signUp.password_restriction_text}
              </Text>

              <View style={styles.checkboxContainer}>
                <CheckBox onChange={onCheckboxChange} value={checkboxValue} />
                <Text>{APP_TEXT.authentification.signUp.checkBox_text}</Text>
              </View>

              <View style={styles.buttonContainer}>
                <ButtonWithBackgroundColor
                  buttonText={APP_TEXT.authentification.signUp.create_account_button_text}
                  shouldDisable={isContinueButtonDisabled}
                  buttonWidth={styles.continueButton.width}
                  handlePress={handleCreateAccountPress}
                />
              </View>
            </View>

          </SafeAreaView>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>

    </>
  );
}
export default AskUserPasswordView;