import { View } from 'react-native';
import React, { useContext } from 'react';
import ButtonWithoutBackground from '../../Button-without-color-background/button';
import SocialMediaBox from '../Social-media-box/social-media-box';
import HorizontalLine from '../../Horizontal-Line/horizontal-line';
import ButtonClickHere from '../../Button-click-here/button-click-here';
import { APP_TEXT } from '../../../data/AppText';
import styles from './signup-with-email-style';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';

const SignUpWithEmail = () => {

  const { setActiveStep } = useContext(NavigatorContext);

  const setStep = () => {
    setActiveStep(InscriptionStepper.UserEmail);
  };

  return (
    <>

      <View style={styles.buttonContainer}>
        <ButtonWithoutBackground handlePress={setStep} buttonTitle={APP_TEXT.authentification.signUp.email_signUp_text}
          textColor={styles.buttonTextColor.color} textFontFamily={styles.buttonTextColor.fontFamily} />
      </View>

      <SocialMediaBox title={APP_TEXT.authentification.signUp.social_media_signUp_text}
        marginTop={styles.socialMediaMargin.marginTop} />

      <HorizontalLine />
      <ButtonClickHere buttonTitle={APP_TEXT.authentification.signUp.already_have_account_text} />

    </>
  )
}

export default SignUpWithEmail;