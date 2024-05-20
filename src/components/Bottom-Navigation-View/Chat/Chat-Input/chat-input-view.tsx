import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import styles from './chat-input-style';

const ChatInputView = ({ handleSend }: any) => {
  const [inputText, setInputText] = useState<string>('');

  const onInputTextChanged = (text: string) => {
    setInputText(text);
  };

  const handleSendPress = () => {
    handleSend({ inputText });
    setInputText('');
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.keyboardAvoidingContainer}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <SafeAreaView>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleSendPress}>
                <Icon style={styles.imageIcon} name="image" size={28} />
              </TouchableOpacity>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Ecrire un message"
                  value={inputText}
                  onChangeText={onInputTextChanged}
                />
                <TouchableOpacity onPress={handleSendPress}>
                  <Icon style={styles.sendIcon} name="send" size={22} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={handleSendPress}>
                <Icon style={styles.cameraIcon} name="camera" size={28} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>

    </>
  );
};

export default ChatInputView;
