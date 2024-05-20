import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';
import styles from './home-body-style';
const EmptyHomeListView = () => {
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

    return (

        <FlatList
            style={{ flexDirection: 'row' }}
            data={[1, 2, 3]}
            horizontal={true}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
                <View key={index} style={{ marginRight: 10 }}>
                    <ShimmerPlaceHolder
                        style={styles.cardContainer}
                        visible={false}
                    >
                        <FastImage
                            style={styles.cardContainer}
                            source={{ uri: "" }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </ShimmerPlaceHolder>
                    <ShimmerPlaceHolder
                        style={styles.shimmerText}
                        visible={false}
                    >
                        <Text style={styles.cardContentTitle}></Text>
                    </ShimmerPlaceHolder>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default EmptyHomeListView