import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    myMessage: {
      flexDirection: 'row',
      marginTop: '5%',
      fontFamily: 'AvenirNext-Regular',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      backgroundColor: '#E67918',
      borderRadius: 8,
      padding: 8,
      marginBottom: 8,
      maxWidth: '80%',
    },
  
    messageTime: {
      marginStart: '5%',
      fontSize: 12,
      color: '#000',
      marginTop: 4,
    },
    otherMessage: {
      flexDirection: 'row',
      marginStart: '2%',
      marginTop: '5%',
      fontFamily: 'AvenirNext-Regular',
      alignSelf: 'flex-start',
      backgroundColor: '#FFF',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E67918',
      padding: 8,
      marginBottom: 8,
      maxWidth: '80%',
    },
    messageText: {
      fontSize: 16,
      color: 'black',
    },
  
    avatarContainer: {
      marginTop: '7%',
    },
    avatar: {
      borderRadius: 12,
    },
  });

  export default styles;