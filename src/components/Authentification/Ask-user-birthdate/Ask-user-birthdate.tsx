import React, { useCallback, useContext, useState } from 'react'
import { APP_TEXT } from '../../../data/AppText';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import AskUserBirthdateView from './Ask-user-birthdate-view';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { isAgeOver18 } from '../../../utils/AuthentificationUtils';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';

const AskUserBirthdate = () => {
  
  const {signUpData,setSignUpData} = useContext(AuthentificationContext);
  const { setActiveStep } = useContext(NavigatorContext);
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
  const [show, setShowCalendarPicker] = useState(false);
  const [showInputError, setShowInputrror] = useState(false);
  const placeHolderText = APP_TEXT.authentification.signUp.birthdate_place_holder_text;
  const [text, setText] = useState(placeHolderText);

  const handleContinueBtnPress = useCallback(() => {

    if (text.trim() != placeHolderText && !isAgeOver18({ dateOfBirth: text })) {
      setShowInputrror(true);
    } else {
      setShowInputrror(false);
      setSignUpData({ ...signUpData!, dateNaissance: text });
      setActiveStep(InscriptionStepper.UserPassword);
    }

  }, [text]);

  const handleChange = useCallback((event: DateTimePickerEvent, selectedDate: Date | undefined) => {

    setShowCalendarPicker(false);
    const day = selectedDate!.getDate();
    const month = selectedDate!.getMonth() + 1;
    const year = selectedDate!.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    setText(formattedDate);
    setIsContinueButtonDisabled(false);

  }, [show]);

  return (
    <AskUserBirthdateView
      isContinueButtonDisabled={isContinueButtonDisabled}
      text={text}
      setShowCalendarPicker={setShowCalendarPicker}
      show={show}
      handlePress={handleContinueBtnPress}
      handleChange={handleChange}
      showInputError={showInputError}
    />
  )
}



export default AskUserBirthdate;