import React from 'react';
import { Text, View } from 'react-native';
import styles from './login-form-title-style';

const LoginFormTitle = ({ title }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default LoginFormTitle;