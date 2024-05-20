import React from 'react';
import styles from './Ask-user-birthdate-style';
import { APP_TEXT } from '../../../data/AppText';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithBackgroundColor from '../../Button-with-color-background/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';

const AskUserBirthdateView = ({ 
  isContinueButtonDisabled,
  text,
  setShowCalendarPicker,
  show,
  handlePress,
  handleChange,
  showInputError
}: any) => {

  return (
    <>
      <KeyboardAwareScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <Text
              style={[styles.input,
              {
                color: isContinueButtonDisabled ? 'gray' : 'black'
              }]}
              onPress={() => { setShowCalendarPicker(true) }}>
              {text}
              {show && (<DateTimePicker onChange={handleChange}
                mode='date'
                value={new Date()}
                is24Hour={true} />)}
            </Text>

            {showInputError && (<Text style={styles.inputError}>
              {APP_TEXT.authentification.signUp.birthdate_restriction_text}
            </Text>)}

            {!showInputError && (<Text style={styles.restrictionText}>
              {APP_TEXT.authentification.signUp.birthdate_restriction_text}
            </Text>)}

            <View style={styles.buttonContainer}>
              <ButtonWithBackgroundColor
                handlePress={handlePress}
                buttonText={APP_TEXT.authentification.signUp.continue_text}
                shouldDisable={isContinueButtonDisabled}
                buttonWidth={styles.continueButton.width}
              />
            </View>
          </View>

        </SafeAreaView>

      </KeyboardAwareScrollView>

    </>
  );
}
export default AskUserBirthdateView;