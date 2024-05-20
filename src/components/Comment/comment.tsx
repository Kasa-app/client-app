import { Text, View, Image } from "react-native";
import { APP_TEXT } from "../../data/AppText";
import { userAvatar } from "../../data/ImagesPath";
import styles from './comment-styles';

type Props = {
  comment: string;
  name: string;
  photo: string | undefined;
};

const Comment = ({ comment, name, photo }: Props) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.userContainer}>
        <Image source={photo || userAvatar} style={styles.userAvatar}/>
      </View>
      <View style={styles.userCommentContainer}>
        <Text style={styles.user}>{name} {APP_TEXT.services.said}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

export default Comment;
