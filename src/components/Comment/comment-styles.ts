import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  comment: {
    color: '#000',
    flexWrap: 'wrap',
  },
  user: {
    color: '#E67918',
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E67918',
    overflow: 'hidden',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userCommentContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
});

export default styles;