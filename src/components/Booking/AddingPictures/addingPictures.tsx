import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HandleContinueBtn } from "../../../hooks/BookingContinueBtnHooks";
import styles from "./addingPictures-style";
import FastImage from "react-native-fast-image";
import { useCameraHooks } from "../../../hooks/useCameraHooks";

type Props = {
  onChange: (value: any) => void;
};

export const AddingPictures = ({ onChange }: Props) => {
  const { enableBtn } = HandleContinueBtn();
  const { selectedImages, handleAddClick } = useCameraHooks({ onChange });

  useEffect(() => {
    enableBtn();
  }, []);
  const buttons = Array.from({ length: 3 }, (_, index) => (
    <TouchableOpacity key={index} onPress={() => handleAddClick(index)}>
      <View style={styles.squareButton}>
        {selectedImages[index] ? (
          <FastImage
            style={{ width: 250, height: 250 }}
            source={{ uri: selectedImages[index] }}
            resizeMode={FastImage.resizeMode.center}
          />
        ) : (
          <Text style={styles.buttonText}>+</Text>
        )}
      </View>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {buttons}
    </View>
  );
};
