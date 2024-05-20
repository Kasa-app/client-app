import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#E67918',
    flexDirection: 'column',
    paddingBottom: '8%',
  },

  welcomeText: {
    marginStart: '4%',
    color: 'white',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 15
  },
  horizontalLine: {
    marginStart: '2%',
    marginTop: '2%',
    height: 2,
    width: '25%',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  notificationLogo: {
    marginStart: '90%',
    marginTop: '-12%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  avatar: {
    marginStart: '9%',
    marginTop: '1%',
  }
});

export default styles;