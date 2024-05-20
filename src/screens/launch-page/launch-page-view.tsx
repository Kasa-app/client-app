import React from 'react';
import { Image, View } from 'react-native';
import styles from './launch-page-sytles';
import { appLogo } from '../../data/ImagesPath';

const LaunchPageView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={appLogo} />
      </View>
    </View>
  );
}
export default LaunchPageView;