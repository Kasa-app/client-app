import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './login-page-style';
import Header from '../../../components/Header/header';
import Loading from '../../../components/Loading/loading';
import LoginFormTitle from '../../../components/Authentification/Login-form-title/login-form-title';
import { APP_TEXT } from '../../../data/AppText';
import { View, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ButtonWithBackgroundColor from '../../../components/Button-with-color-background/button';
import UserInput from '../../../components/User-input/user-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SocialMediaBox from '../../../components/Authentification/Social-media-box/social-media-box';
import HorizontalLine from '../../../components/Horizontal-Line/horizontal-line';
import ButtonClickHere from '../../../components/Button-click-here/button-click-here';
import { Screen } from '../../../data/Screen';
import { loginClient } from '../../../services/AuthentificationService';
import { useLoadingState } from '../../../hooks/useLoadingState';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import { DialogContext } from '../../../context/dialog/dialog-context';
import useNavigation from '../../../hooks/useNavigation';

const LoginView = ({ navigation }: any) => {
  const { setAuthHomePageData } = useContext(AuthentificationContext);
  const { showDialog } = useContext(DialogContext);
  const { isLoading, progress, setIsLoading, setProgress } = useLoadingState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
  const {navigateToScreen}  = useNavigation(navigation);

  useEffect(() => {
    setIsContinueButtonDisabled(!(email.trim() != '' && password.trim() != ''));
  }, [email, password]);

  const onNoAccountPress = useCallback(() => {
    navigateToScreen(Screen.authentification.signUp);
  }, []);

  const handleOkButtonPress = useCallback(() => {
    navigateToScreen(Screen.authentification.login);
  }, []);

  const onLoginPress = useCallback(async () => {
    const data = {
      email,
      password
    };
    try {
      const response = await loginClient({ data, onUploadProgress: setProgress, setIsLoading });
      setAuthHomePageData({
        client: response?.client,
        homePageData: response?.homePageData,
      });
      navigateToScreen(Screen.tabsNavigation);
    } catch (error: any) {
      showDialog({
        message: APP_TEXT.authentification.signIn.login_failed,
        callback: handleOkButtonPress
      });
    } finally {
      setProgress(0);
      setIsLoading(false);
    }
  }, [email, password, handleOkButtonPress]);

  if (isLoading) {
    return <Loading progress={progress} />;
  }

  return (
    <>
      <Header navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <SafeAreaView>
            <LoginFormTitle title={APP_TEXT.authentification.signIn.message_bienvenue} />
            <View style={styles.container}>
              <View>
                <UserInput
                  holderText={APP_TEXT.authentification.signIn.adresse_email}
                  textBeingChanged={(text: string) => {
                    setEmail(text);
                  }}
                />
              </View>

              <View style={styles.passwordContainer}>
                <UserInput
                  isSecure={true}
                  holderText={APP_TEXT.authentification.signIn.mot_de_passe}
                  textBeingChanged={(text: string) => {
                    setPassword(text);
                  }}
                />
              </View>

              <View style={styles.buttonContainer}>
                <ButtonWithBackgroundColor
                  buttonText={APP_TEXT.authentification.signIn.connexion}
                  handlePress={onLoginPress}
                  shouldDisable={isContinueButtonDisabled}
                />
              </View>

              <View style={styles.footerContainer}>
                <ButtonClickHere buttonTitle={APP_TEXT.authentification.signIn.question_forget_password}  />

                <View style={styles.socialMedia}>
                  <SocialMediaBox
                    title={APP_TEXT.authentification.signIn.social_media_signIn_text}
                  />
                </View>

                <HorizontalLine />
                <ButtonClickHere
                  buttonTitle={APP_TEXT.authentification.signIn.not_have_account_text}
                  handlePress={onNoAccountPress}
                />
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback >
    </>
  );
};

export default LoginView;
