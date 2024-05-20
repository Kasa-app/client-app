import React, { useContext } from 'react';
import styles from './header-style';
import { Image, TouchableOpacity, View } from 'react-native';
import { headerLogo } from '../../data/ImagesPath';
import { backButton } from '../../data/ImagesPath';
import { NavigatorContext } from '../../context/navigation/navigator-context';
import { Screen } from '../../data/Screen';
import useNavigation from '../../hooks/useNavigation';
import { InscriptionStepper } from '../../models/stepper/InscriptionStepper';

type Props = {
  navigation: any;
  back?: string | null
  backStep?: InscriptionStepper | null;
  backRoute?: string;
};

const Header = ({
  navigation,
  back = null,
  backStep = null,
  backRoute = Screen.authentification.startup,
}: Props) => {
  const { setActiveStep } = useContext(NavigatorContext);
  const { navigateToScreen } = useNavigation(navigation);

  const setBackStep = () => {
    if (back != null) navigation.goBack();
    else if (!backStep) navigateToScreen(backRoute);
    else setActiveStep(backStep);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={setBackStep} style={styles.backButton}>
        <Image source={backButton} />
      </TouchableOpacity>
      <View style={styles.verticleLine}></View>
      <Image source={headerLogo} style={styles.logo} />
    </View>
  );
}
export default Header;