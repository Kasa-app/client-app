import React, { useContext } from 'react';
import styles from './home-header-style';
import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { notificationLogo } from '../../../../data/ImagesPath';

const HomeHeaderView = ({ profilePic, firstName }: any) => {

  return (
    <View style={styles.container}>
      <Avatar
        size="medium"
        containerStyle={styles.avatar}
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', //temporary image
        }}
      />
      <Text style={styles.welcomeText}>Bienvenue {firstName}</Text>
      <View style={styles.horizontalLine}></View>
      <Image style={styles.notificationLogo} source={notificationLogo} />
    </View>

  );
}
export default HomeHeaderView;