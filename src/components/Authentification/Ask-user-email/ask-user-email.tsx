import React, { useCallback, useContext, useState } from 'react';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import AskUserEmailView from './ask-user-email-view';
import { isEmailValid } from '../../../utils/AuthentificationUtils';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';
import { useLoadingState } from '../../../hooks/useLoadingState';
import { validateClientEmailExists } from '../../../services/AuthentificationService';
import { DialogContext } from '../../../context/dialog/dialog-context';
import { APP_TEXT } from '../../../data/AppText';

const AskUserEmail = () => {
  const { showDialog } = useContext(DialogContext);
  const { setActiveStep } = useContext(NavigatorContext);
  const { signUpData, setSignUpData } = useContext(AuthentificationContext);
  const { isLoading, setIsLoading, setProgress } = useLoadingState();
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [showInputError, setShowInputError] = useState(false);
  const [inputErrorText, setInputErrorText] = useState(APP_TEXT.authentification.signUp.email_error);

  const validateEmailExists = useCallback(async () => {
    try {
      const response = await validateClientEmailExists({ email, onDownloadProgress: setProgress, setIsLoading });
      return response.emailExists;
    } catch (error) {
      showDialog({ message: APP_TEXT.authentification.signUp.validate_email_error });
    }
  }, [email]);

  const validateEmail = useCallback(async () => {
    if (email.trim() === '' || !isEmailValid({ email })) {
      return false;
    }
  
    const exists = await validateEmailExists();

    if (exists) {
      setInputErrorText(APP_TEXT.authentification.signUp.email_already_exist);
    }

    return !exists;
  }, [email]);
  
  const handleContinueBtnPress = useCallback(async () => {
    const emailIsValid = await validateEmail();
    if (emailIsValid){
      setShowInputError(false);
      setSignUpData({ ...signUpData!, courriel: email });
      setActiveStep(InscriptionStepper.UserName);
    } else {
      setShowInputError(true);
    }
  }, [email]);

  return (
    <AskUserEmailView
      isContinueButtonDisabled={isContinueButtonDisabled}
      inputErrorText={inputErrorText}
      isLoading={isLoading}
      setIsContinueButtonDisabled={setIsContinueButtonDisabled}
      handlePress={handleContinueBtnPress}
      setEmail={setEmail}
      showInputError={showInputError}
    />
  );
};

export default AskUserEmail;