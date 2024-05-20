import { View } from 'react-native'
import React from 'react'
import styles from './dialog-box-style'
import Dialog from "react-native-dialog";

const DialogBoxView = ({ handleOkPressButton, visible, description }: any) => {
  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible} onBackdropPress={handleOkPressButton} contentStyle={styles.dialogStyle}>
        <Dialog.Description>
          {description}
        </Dialog.Description>
        <Dialog.Button color={"#E67918"} label="Ok" onPress={handleOkPressButton} />
      </Dialog.Container>
    </View>
  );
};

export default DialogBoxView;