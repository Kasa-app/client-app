import { Image, ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faComment, faListCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header/header";
import { Screen } from "../../data/Screen";
import { ServiceComment } from "../../models/dataType/ServiceComment";
import { userAvatar } from "../../data/ImagesPath";
import styles from './jobber-profile-styles';
import { APP_TEXT } from "../../data/AppText";
import Description from "../../components/Description/description";
import Comment from "../../components/Comment/comment";
import ButtonWithBackgroundColor from "../../components/Button-with-color-background/button";

type Props = {
  prenom: string;
  nom: string;
  description: string;
  handleCreateAppointment: () => void;
  servicesDoneCount: number;
  selectedServiceCount: number;
  note: number;
  salary: number;
  comments: ServiceComment[];
  commentsCount: number;
  photo?: string;
  isMakingAppointment?: boolean;
  langues: string[];
  navigation: any;
};

const JobberProfileView = ({
  comments,
  navigation,
  prenom,
  nom,
  description,
  handleCreateAppointment,
  commentsCount,
  selectedServiceCount,
  servicesDoneCount,
  note,
  photo,
  isMakingAppointment,
  salary,
  langues,
}: Props) => {
  return (
    <>
      <Header navigation={navigation} backRoute={Screen.searchJobbers} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.jobberContainer}>
            <Image source={photo || userAvatar} style={styles.jobberAvatar}/>
            <Text style={styles.fullName}>{prenom} {nom}</Text>
          </View>

          <View style={styles.jobberInfo}>
            <View style={styles.infoContainer}>
              <FontAwesomeIcon icon={faStar} size={22} color={'#E67918'} />
              <Text style={styles.infoText}>{`${note}  (${commentsCount} ${APP_TEXT.booking.comments})`}</Text>
            </View>
            {selectedServiceCount > 0 && (
              <View style={styles.infoContainer}>
                <FontAwesomeIcon icon={faListCheck} size={22} color={'#E67918'} />
                <Text style={styles.infoText}>{`${APP_TEXT.booking.services_done} ${selectedServiceCount}`}</Text>
              </View>
            )}
            <View style={styles.infoContainer}>
              <FontAwesomeIcon icon={faBriefcase} size={22} color={'#E67918'} />
              <Text style={styles.infoText}>{`${APP_TEXT.booking.services_done} ${servicesDoneCount} ${APP_TEXT.booking.services}`}</Text>
            </View>
            <View style={styles.infoContainer}>
              <FontAwesomeIcon icon={faComment} size={22} color={'#E67918'} />
              <Text style={styles.infoText}>{`${APP_TEXT.booking.languages} ${langues.join(', ')}`}</Text>
            </View>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.jobberInfo}>
            <Text style={styles.skillsText}>{APP_TEXT.booking.skills}</Text>
            <Description description={description} ratio={8} />
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.jobberInfo}>
            <Text style={styles.skillsText}>{APP_TEXT.booking.comments}</Text>
            {comments?.length > 0 ? comments.map((comment: ServiceComment) => (
              <View key={comment.commentId} style={styles.commentContainer}>
                <Comment
                  comment={comment.comment}
                  name={comment.client.prenom}
                  photo={photo}
                />
              </View>
            )) : (
              <Text style={styles.noComment}>{APP_TEXT.booking.no_comment}</Text>
            )}
          </View>

          <View style={styles.commentBox}>
            <Text style={styles.salaryText}>{salary}$/h</Text>
            <ButtonWithBackgroundColor
              buttonText={APP_TEXT.booking.to_book}
              handlePress={handleCreateAppointment}
              customButtonTextStyle={styles.buttonText}
              customContainerStyle={styles.buttonContainer}
              shouldDisable={isMakingAppointment}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default JobberProfileView;
