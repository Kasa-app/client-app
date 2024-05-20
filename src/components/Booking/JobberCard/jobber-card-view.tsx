import { Image, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faClock } from '@fortawesome/free-solid-svg-icons';
import { userAvatar } from "../../../data/ImagesPath";
import StarRating from "../../StarRating/star-rating";
import styles from './jobber-card-styles';
import { APP_TEXT } from "../../../data/AppText";
import ButtonWithBackgroundColor from "../../Button-with-color-background/button";
import { formatDate } from "../../../utils/BookingUtils";

type Props = {
  prenom: string;
  note: number;
  salary: number;
  creationDate: string;
  commentsCount: number;
  servicesDoneCount: number;
  photo?: string;
  isMakingAppointment?: boolean;
  onSeeJobberProfilePress: () => void;
  handleCreateAppointment: () => void;
};

const JobberCardView = ({
  prenom,
  note,
  salary,
  creationDate,
  commentsCount,
  servicesDoneCount,
  photo,
  isMakingAppointment,
  onSeeJobberProfilePress,
  handleCreateAppointment
}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.jobberContainer}>
        <Image source={photo || userAvatar} style={styles.jobberAvatar}/>
        <View style={styles.jobberInfo}>
          <View style={styles.nameSalaryContainer}>
            <Text style={styles.name}>{prenom}</Text>
            <Text style={styles.salary}>{`${salary}$`}</Text>
          </View>
          <View style={styles.starsContainer}>
            <StarRating rating={note} />
            <Text style={styles.commentsCount}>{`(${commentsCount})`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.moreInfo}>
        <FontAwesomeIcon
          icon={faClock}
          size={22}
          color={'#E67918'}
        />
        <Text style={styles.moreInfoText}>{`${APP_TEXT.booking.member_since} ${formatDate(creationDate)}`}</Text>
      </View>
      <View style={styles.moreInfo}>
        <FontAwesomeIcon
          icon={faBriefcase}
          size={22}
          color={'#E67918'}
        />
        <Text style={styles.moreInfoText}>
          {`${APP_TEXT.booking.services_done} ${servicesDoneCount} ${APP_TEXT.booking.services}`}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonWithBackgroundColor
          buttonText={APP_TEXT.booking.to_book}
          handlePress={handleCreateAppointment}
          customButtonTextStyle={styles.buttonText}
          shouldDisable={isMakingAppointment}
        />
        <ButtonWithBackgroundColor
          buttonText={APP_TEXT.booking.see_profile}
          handlePress={onSeeJobberProfilePress}
          customButtonTextStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default JobberCardView;
