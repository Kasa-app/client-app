import React from 'react';
import styles from './button-style';
import { DimensionValue, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
  buttonWidth?: DimensionValue;
  buttonHeight?: DimensionValue;
  buttonText: string;
  customContainerStyle?: ViewStyle;
  customButtonStyle?: ViewStyle;
  customButtonTextStyle?: TextStyle;
  shouldDisable?: boolean;
  handlePress: () => void;
};

const ButtonWithBackgroundColor = ({
  buttonWidth,
  buttonHeight,
  buttonText,
  customContainerStyle,
  customButtonStyle,
  customButtonTextStyle,
  shouldDisable,
  handlePress
}: Props) => {
  return (
    <View style={[styles.buttonContainer, customContainerStyle]}>
      <TouchableOpacity
        onPress={handlePress}
        disabled={shouldDisable}
        style={[
          styles.button,
          shouldDisable && styles.buttonDisabled,
          { width: buttonWidth, height: buttonHeight },
          customButtonStyle
        ]}>
        <Text style={[styles.buttonText, shouldDisable && styles.buttonTextWhenButtonDisabled, customButtonTextStyle]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonWithBackgroundColor;