import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { APP_TEXT } from "../../data/AppText";
import Header from "../Header/header";

type Props = {
  errorMessage: string;
  onRetry: () => void;
  navigation: any;
};

const Error = ({ errorMessage, onRetry, navigation }: Props) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.message}>{errorMessage}</Text>
        <TouchableOpacity style={styles.buttonError} onPress={onRetry}>
          <Text style={styles.retryButton}>{APP_TEXT.components.retry}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Error;
