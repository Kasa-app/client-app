import React from 'react';
import { Image, View } from 'react-native';
import styles from './loading-style';
import { appLogo } from '../../data/ImagesPath';
import * as Progress from 'react-native-progress';

const Loading = ({ progress = 0 }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={appLogo} />
      </View>

      <View style={styles.progressBarContainer}>
        <Progress.Bar progress={progress}
          color='#E67918'
          width={350}
          unfilledColor='black'
        />
      </View>
    </View>
  );
}

export default Loading;