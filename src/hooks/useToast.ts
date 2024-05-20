import Toast from "react-native-toast-message";

export const useToast = () => {

    const showToast = (message: string) => {
        Toast.show({
            type: 'info',
            text1: message,
            visibilityTime: 5000,
            autoHide: true
        });
    }
    
    return { showToast }
}