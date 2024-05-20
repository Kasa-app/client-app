import React from 'react';
import styles from './button-style';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonWithoutBackground = ({ buttonTitle, buttonHeight = undefined, textColor, textFontFamily, handlePress }: any) => {

   const buttonWidth = Math.max(buttonTitle.length * 10, 100);

  const customStyles = {
    color: textColor || '#FFF',
    fontFamily: textFontFamily || 'AvenirNext-Bold',
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={[styles.button, { width: buttonWidth}, buttonHeight !== undefined && { height: buttonHeight }]}>
        <Text style={[styles.ButtonText, customStyles]}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonWithoutBackground;