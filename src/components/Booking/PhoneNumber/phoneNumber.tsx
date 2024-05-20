import { TextInput, View } from "react-native";
import styles from "./phoneNumber-style";
import { useState, useCallback } from "react";
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";

type Props = {
  onChange: (value: any) => void;
  placeholder?: string;
  value: string;
};

const PhoneNumber = ({ onChange, placeholder, value }: Props) => {
  const [text, setText] = useState(value || '');
  const { enableBtn } = HandleContinueBtn();

  const handleChange = useCallback((text: string) => {
    setText(text);
    onChange(text);
    enableBtn();
  }, [text, onChange]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        placeholder={placeholder}
        onChangeText={handleChange}
        style={styles.input}
      />
    </View>
  );
};

export default PhoneNumber;
