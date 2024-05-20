import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appLogo, loginImage } from '../../../data/ImagesPath';
import styles from './startup-page-styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { APP_TEXT } from '../../../data/AppText';

const StartupView = ({ onInscriptionPress, onLoginPress }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View>
          <Image source={loginImage} style={styles.image} />
        </View>

        <View style={styles.LogoTextContainer}>
          <Image source={appLogo} style={styles.appLogo} />
          <Text style={styles.welcomeText}>{APP_TEXT.authentification.startup.welcome_text}</Text>
        </View>

        <View style={styles.PickupTextContainer}>
          <Text style={styles.pickupLine1}>{APP_TEXT.authentification.startup.pickupLine1}</Text>
          <Text style={styles.pickupLine2}>{APP_TEXT.authentification.startup.pickupLine2}</Text>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={onInscriptionPress}
            style={styles.inscriptionButton}>

            <Text style={styles.ButtonText}>
              {APP_TEXT.authentification.startup.inscription_text}
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={onLoginPress}
            style={styles.connexionButton}>

            <Text style={styles.ButtonText}>
              {APP_TEXT.authentification.startup.connexion_text}
            </Text>
            
          </TouchableOpacity>
        </View>
        {/* permet d'avoir un espace vide en bas des boutons */}
        <View style={{ height: 40 }}></View>
      </ScrollView>

    </SafeAreaView>

  );
};

export { StartupView };