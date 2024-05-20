import React, { useState } from 'react';
import styles from './user-input-style';
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const UserInput = ({ holderText, textBeingChanged, errorText, 
                     isSecure = false, showError = false }: any) => {

  const [eyeOff, setEyeOff] = useState(false)
  const [isSecureTextEntry, setSecureTextEntry] = useState(isSecure);

  const handleEyeIcon = () => {
    (eyeOff) ? (setEyeOff(false), setSecureTextEntry(true)) : (setEyeOff(true), setSecureTextEntry(false))
  }

  return (

    <View style={styles.container}>

      <View style={[styles.inputContainer, showError ? { borderColor: 'red' } : undefined ]}>
        <TextInput
          secureTextEntry={isSecureTextEntry}
          onChangeText={textBeingChanged}
          style={styles.input}
          placeholder={holderText}
        />

        {isSecure && (
          <TouchableOpacity onPress={handleEyeIcon}>
            {!eyeOff && (<Icon name="eye" size={25} style={styles.eyesIcon} />)}
            {eyeOff && (<Icon name="eye-off" size={25} style={styles.eyesIcon} />)}
          </TouchableOpacity>)}
      </View >

      {showError && (<Text style={styles.inputError}>
        {errorText}
      </Text>)}
  
      
  </View>

  );
}
export default UserInput;