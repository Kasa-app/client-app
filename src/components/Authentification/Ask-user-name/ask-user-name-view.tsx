import React from 'react';
import styles from './ask-user-name-style';
import { APP_TEXT } from '../../../data/AppText';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import UserInput from '../../User-input/user-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithBackgroundColor from '../../Button-with-color-background/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AskUserNameView = ({
  isContinueButtonDisabled, 
  handlePress,
  setLastName,
  setFirstName
}: any) => {


  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">

          <SafeAreaView>
            <View style={styles.inputContainer}>

              <View>
                <UserInput
                  holderText={APP_TEXT.authentification.signUp.lastName_place_holder_text}
                  textBeingChanged={(text: string) => {
                    setLastName(text);
                  }}
                />
              </View>
              <View style={styles.lastNameContainer}>
                <UserInput
                  holderText={APP_TEXT.authentification.signUp.firstName_place_holder_text}
                  textBeingChanged={(text: string) => {
                    setFirstName(text);
                  }}
                />
              </View>

              <View style={styles.buttonContainer}>
                <ButtonWithBackgroundColor
                  buttonText={APP_TEXT.authentification.signUp.continue_text}
                  shouldDisable={isContinueButtonDisabled}
                  buttonWidth={styles.continueButton.width}
                  handlePress={handlePress}
                />
              </View>
            </View>

          </SafeAreaView>

        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback >
    </>
  );
}
export default AskUserNameView;