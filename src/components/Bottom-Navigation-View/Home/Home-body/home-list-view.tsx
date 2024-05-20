import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';
import styles from './home-body-style';

type Props = {
  handlePress: (num: string, nomService: string) => void;
  num: string;
  image: string;
  nom: string;
};

const HomeListView = ({
  handlePress,
  num,
  image,
  nom,
}: Props) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View>
      <ShimmerPlaceHolder
        style={styles.cardContainer}
        visible={true}
      >
        <TouchableOpacity
          onPress={() => handlePress(num, nom)}
        >
          <FastImage
            style={styles.cardContainer}
            source={{ uri: image }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder
        style={styles.shimmerText}
        visible={true}>
        <Text style={styles.cardContentTitle}>{nom}</Text>
      </ShimmerPlaceHolder>
    </View>
  );
};

export default HomeListView;
