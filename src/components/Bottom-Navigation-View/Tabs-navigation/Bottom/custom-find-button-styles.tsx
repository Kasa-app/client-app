import { StyleSheet } from "react-native";
import { shadowStyles } from "./shadow-style";

export const styles = StyleSheet.create({

    opacityStyle: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...shadowStyles.shadow
    },

    viewStyle:{
        width: 70,
        height: 70,
        borderRadius: 35,
    }

});