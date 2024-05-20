import { View } from "react-native";
import styles from "./horizontal-line-style";

const FullHorizontalLine = ({height = 1.5, color = "707070"}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.fullLine, {height: height, backgroundColor: color}]}></View>
    </View>
  );
};

export default FullHorizontalLine;
