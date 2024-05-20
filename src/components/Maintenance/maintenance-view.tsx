import { Text, View } from "react-native";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./maintenance-styles";
import { APP_TEXT } from "../../data/AppText";

const MaintenanceView = () => {
  return (
    <View style={styles.maintenanceContainer}>
      <FontAwesomeIcon
        icon={faPersonDigging}
        size={140}
        color={'#E67918'}
      />
      <Text style={styles.maintenanceTitle}>{APP_TEXT.maintenance.title}</Text>
      <Text style={styles.maintenanceText}>{APP_TEXT.maintenance.message}</Text>
    </View>
  );
};

export default MaintenanceView;
