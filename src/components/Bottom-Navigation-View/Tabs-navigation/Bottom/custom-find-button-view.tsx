import { TouchableOpacity, View } from "react-native";
import { styles } from "./custom-find-button-styles";

export const CustomFindButtonView = ({ children, onPress }: any) => (

    <TouchableOpacity
        style={styles.opacityStyle}
        onPress={onPress}
    >
        <View style={styles.viewStyle}>
            {children}
        </View>
    </TouchableOpacity>
);
