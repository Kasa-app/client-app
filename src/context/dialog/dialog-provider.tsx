import { View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import DialogBox from '../../components/DialogBox/dialog-box';
import { DialogContextType } from '../../models/contextType/DialogContextType';
import { DialogContext } from './dialog-context';
import styles from './dialog-provider-styles';

export const DialogProvider = ({ children }: any) => {
  const [dialogDescription, setDialogDescription] = useState<string>('');
  const [showDialogBox, setShowDialogBox] = useState<boolean>(false);
  const [callback, setCallback] = useState<Function>();

  const handleOkPressButton = useCallback(() => {
    if (callback) {
      callback(); 
    }
    setShowDialogBox(false);
  }, [callback]);

  const showDialog = useCallback((options: { message: string, callback?: Function | undefined }) => {
    const { message, callback } = options;
    setDialogDescription(message);
    setCallback(() => callback);
    setShowDialogBox(true);
  }, []);
 
  const context: DialogContextType = { showDialog };

  return (
    <DialogContext.Provider value={context}>
      {showDialogBox && 
        <>
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        
          <View>
            <DialogBox
              description={dialogDescription}
              handleOkPressButton={handleOkPressButton}
              showDialogBox={showDialogBox}
            />
          </View>
        </>
      }
      {children}
    </DialogContext.Provider>
  );
};