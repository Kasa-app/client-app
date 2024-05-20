import { View, TouchableOpacity, Text } from "react-native";
import { APP_TEXT } from "../../data/AppText";
import styles from "./description-styles";

type Props = {
  description: string;
  isDescriptionExpanded: boolean;
  numberOfLinesToShow?: number;
  showMoreNeeded: boolean;
  toggleDescription: () => void;
};

const DescriptionView = ({
  description,
  isDescriptionExpanded,
  numberOfLinesToShow,
  showMoreNeeded,
  toggleDescription
}: Props) => {
  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={numberOfLinesToShow} style={styles.description}>
          {description}
        </Text>
        {showMoreNeeded && (
          <TouchableOpacity onPress={toggleDescription} style={styles.showMore}>
            <Text style={styles.showMoreText}>
              {isDescriptionExpanded ? APP_TEXT.components.show_less : APP_TEXT.components.show_more}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DescriptionView;
