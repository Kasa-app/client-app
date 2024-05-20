import React, { useContext } from 'react';
import { StartupView } from './startup-page-view';
import { Screen } from '../../../data/Screen';
import useNavigation from '../../../hooks/useNavigation';

const StartupPage = ({ navigation }: any) => {  
  
  const {navigateToScreen}  = useNavigation(navigation);

  const handleInscriptionPress = () => {
    navigateToScreen(Screen.authentification.signUp);
  };

  const onLoginPress = () => {
    navigateToScreen(Screen.authentification.login)
  };

  return (
    <StartupView
      onInscriptionPress={handleInscriptionPress}
      onLoginPress={onLoginPress}
    />
  );
}

export default StartupPage;
