import { View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from "./star-rating-styles";

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <View style={styles.starsContainer}>
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          size={20}
          color={i < rating ? '#E67918' : '#D9D9D9'}
        />
      ))}
    </View>
  );
};

export default StarRating;
