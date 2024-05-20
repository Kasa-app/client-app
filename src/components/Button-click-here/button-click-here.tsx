import React from 'react';
import styles from './button-click-here-style';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonClickHere = ({ buttonTitle, handlePress }: any) => {
    return (
      <View>
        <TouchableOpacity onPress={handlePress} style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>
            {buttonTitle}
          </Text>
        </TouchableOpacity>
      </View>
    );
}
export default ButtonClickHere;