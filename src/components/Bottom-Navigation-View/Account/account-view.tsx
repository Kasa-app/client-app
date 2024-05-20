import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { userAvatar } from '../../../data/ImagesPath';
import styles from './account-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faChevronRight, faBell, faQuestion } from '@fortawesome/free-solid-svg-icons';
import ButtonWithBackgroundColor from '../../Button-with-color-background/button';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { APP_TEXT } from '../../../data/AppText';
import { formatDate } from '../../../utils/BookingUtils';

type Props = {
  nom: string;
  prenom: string;
  handleOnLogoutPress: () => void;
  photo?: string;
  dateCreation: string;
  profileLoaded: boolean;
};

const AccountView = ({
  nom,
  prenom,
  handleOnLogoutPress,
  photo,
  dateCreation,
  profileLoaded
}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <ShimmerPlaceHolder LinearGradient={LinearGradient} visible={profileLoaded}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image source={photo || userAvatar} style={styles.profileAvatar}/>
            <View style={styles.creationDateContainer}>
              <View>
                <Text style={styles.memberText}>{APP_TEXT.profile.member_since}</Text>
                <Text style={styles.dateText}>{formatDate(dateCreation)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{prenom}</Text>
            <Text style={styles.nameText}>{nom}</Text>
          </View>
        </View>
      </ShimmerPlaceHolder>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionCategoryText}>{APP_TEXT.profile.profile}</Text>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.option}>
            <View style={styles.optionCircleIcon}>
              <FontAwesomeIcon
                icon={faUser}
                size={22}
                color={'#E67918'}
              />
            </View>
            <Text style={styles.optionText}>{APP_TEXT.profile.manage_account}</Text>
            <View style={styles.chevronRightOption}>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={22}
                color={'#E67918'}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionCategoryText}>{APP_TEXT.profile.options}</Text>
        <View style={styles.option}>
          <View style={styles.optionCircleIcon}>
            <FontAwesomeIcon
              icon={faBell}
              size={22}
              color={'#E67918'}
            />
          </View>
          <Text style={styles.optionText}>{APP_TEXT.profile.notifications}</Text>
          <View style={styles.chevronRightOption}>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={22}
              color={'#E67918'}
            />
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.optionCircleIcon}>
            <FontAwesomeIcon
              icon={faQuestion}
              size={22}
              color={'#E67918'}
            />
          </View>
          <Text style={styles.optionText}>{APP_TEXT.profile.help}</Text>
          <View style={styles.chevronRightOption}>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={22}
              color={'#E67918'}
            />
          </View>
        </View>
      </View>
      <View style={styles.logoutButtonContainer}>
        <ButtonWithBackgroundColor
          buttonText={APP_TEXT.profile.logout}
          handlePress={handleOnLogoutPress}
          customButtonTextStyle={styles.logoutButtonText}
          customButtonStyle={styles.logoutButton}
        />
      </View>
    </ScrollView>
  );
};

export default AccountView;
