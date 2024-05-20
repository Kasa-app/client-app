import React, { useCallback, useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './MoreDetails-styles';
import { HandleContinueBtn } from '../../../hooks/BookingContinueBtnHooks';

type Props = {
  onChange: (value: any) => void;
  value: string;
};

const MoreDetails = ({ onChange, value }: Props) => {
  const [text, setText] = useState(value || '');
  const { enableBtn } = HandleContinueBtn();

  const handleChange = useCallback((text: string) => {
    setText(text);
    onChange(text);
    enableBtn();
  }, [text, onChange]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        value={text}
        onChangeText={handleChange}
        multiline={true}
        numberOfLines={8}
      />
    </View>
  );
};

export default MoreDetails;
