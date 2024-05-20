import React, { useCallback, useContext, useMemo, useState } from 'react'
import SignUpPageView from './signup-page-view';
import SignUpWithEmail from '../../../components/Authentification/Signup-with-email/signup-with-email';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import AskUserEmail from '../../../components/Authentification/Ask-user-email/ask-user-email';
import { APP_TEXT } from '../../../data/AppText';
import { Screen } from '../../../data/Screen';
import { useBackButtonHandler} from '../../../hooks/NavigatorHooks';
import AskUserName from '../../../components/Authentification/Ask-user-name/ask-user-name';
import AskUserBirthdate from '../../../components/Authentification/Ask-user-birthdate/Ask-user-birthdate';
import AskUserPassword from '../../../components/Authentification/Ask-user-password/ask-user-password';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';
import { useLoadingState } from '../../../hooks/useLoadingState';
import Loading from '../../../components/Loading/loading';
import { manageEnregistrerClientError } from '../../../errors/AuthentificationErrors';
import { enregistrerClient } from '../../../services/AuthentificationService';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import { DialogContext } from '../../../context/dialog/dialog-context';
import useNavigation from '../../../hooks/useNavigation';


const SignUpPage = ({ navigation }: any) => {
  const { activeStep, setActiveStep } = useContext(NavigatorContext);
  const { signUpData, setAuthHomePageData } = useContext(AuthentificationContext);
  const { showDialog } = useContext(DialogContext);
  const { isLoading, progress, setIsLoading, setProgress } = useLoadingState();
  
  const [backStep, setBackStep] = useState(null);
  const [title, setTitle] = useState('');
  const backRouteName = Screen.authentification.login;
  const {navigateToScreen, replaceScreen}  = useNavigation(navigation);

  useBackButtonHandler({ setActiveStep, navigation, backStep, backRouteName });

  const handleOkButtonPress = useCallback(() => {
    setActiveStep(InscriptionStepper.UserEmail);
    navigateToScreen(Screen.authentification.signUp);
  }, []);

  const handleSignUp = useCallback(async (password: string) => {
    try {
      const enregistrerClientResponse = await enregistrerClient({
        onUploadProgress: setProgress,
        data: {...signUpData, motDePasse: password},
        setIsLoading
      });
      setAuthHomePageData({
        client: enregistrerClientResponse?.client,
        homePageData: enregistrerClientResponse?.homePageData,
      });
      replaceScreen(Screen.tabsNavigation);
    } catch (error) {
      manageEnregistrerClientError(error, showDialog, handleOkButtonPress);
    } finally {
      setProgress(0);
      setIsLoading(false);
    }
  }, [signUpData, handleOkButtonPress]);

  const renderStep = useMemo(() => renderStepContent({ activeStep, handleSignUp, setBackStep, setTitle, navigation }), [activeStep, handleSignUp, navigation]);

  if (isLoading) {
    return <Loading progress={progress} />;
  }

  return <SignUpPageView navigation={navigation} backStep={backStep} formTitle={title}>{renderStep}</SignUpPageView>;
};

const renderStepContent = ({ activeStep, backStep, handleSignUp, setBackStep, setTitle, navigation }: any) => {

  switch (activeStep) {

    case InscriptionStepper.SignUpWithEmail:

      (backStep !== null) ? setBackStep(null) : undefined
      setTitle(APP_TEXT.authentification.signUp.create_account_text);

      return <SignUpWithEmail />;

    case InscriptionStepper.UserEmail:

      setBackStep(InscriptionStepper.SignUpWithEmail);
      setTitle(APP_TEXT.authentification.signUp.ask_email_text);

      return <AskUserEmail />;

    case InscriptionStepper.UserName:

      setBackStep(InscriptionStepper.UserEmail);
      setTitle(APP_TEXT.authentification.signUp.ask_user_name_text);

      return <AskUserName />;

    case InscriptionStepper.UserBirthdate:

      setBackStep(InscriptionStepper.UserName);
      setTitle(APP_TEXT.authentification.signUp.ask_user_birthdate);
      return <AskUserBirthdate />

    case InscriptionStepper.UserPassword:
      setBackStep(InscriptionStepper.UserBirthdate);
      setTitle(APP_TEXT.authentification.signUp.ask_user_password);
      return <AskUserPassword navigation={navigation} handleSignUp={handleSignUp}/>

    default:
      break;
  }
};



export default SignUpPage
