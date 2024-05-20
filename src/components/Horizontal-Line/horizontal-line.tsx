import React from 'react';
import styles from './horizontal-line-style';
import { View } from 'react-native';
const HorizontalLine = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstHorizontalLine}></View>
            <View style={styles.secondHorizontalLine}></View>
        </View>
    );
}
export default HorizontalLine;