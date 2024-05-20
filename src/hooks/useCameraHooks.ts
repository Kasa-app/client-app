import { useState } from "react";
import { Alert } from "react-native";
import { CameraOptions, ImageLibraryOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";

type Props = {
    onChange: (value: any) => void;
};

export const useCameraHooks = ({ onChange = () => {}}: Props) => {

    const [selectedImages, setSelectedImages] = useState<(string | undefined)[]>([]);
    const handleAddClick = (index: number) => {
        Alert.alert(
            "Choisir une image",
            "Souhaitez-vous prendre une photo ou choisir depuis la galerie ?",
            [
                { text: "Prendre une photo", onPress: () => launchCameraAction(index) },
                { text: "Choisir depuis la galerie", onPress: () => chooseFromGallery(index) },
                { text: "Annuler", style: "cancel" }
            ]
        );
    };

    const launchCameraAction = (index: number) => {
        const options: CameraOptions = {
            mediaType: 'photo',
            maxHeight: 500,
            maxWidth: 500,
            quality: 1,
        };

        launchCamera(options, (response: ImagePickerResponse) => {
            if (!response.didCancel && !response.errorMessage) {
                const uri = response.assets && response.assets[0].uri;
                if (uri) {
                    const newImages = [...selectedImages];
                    newImages[index] = uri;
                    setSelectedImages(newImages);
                    onChange(newImages);
                }
            }
        });
    };

    const chooseFromGallery = (index: number) => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            maxHeight: 500,
            maxWidth: 500,
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                const newImages = [...selectedImages];
                newImages[index] = uri;
                setSelectedImages(newImages);
                onChange(newImages);
            }
        });
    };

    return { handleAddClick, selectedImages }
}