import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: '15%',
    paddingHorizontal: 10,
    paddingVertical: 0
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  forgetPasswordBtn: {
    marginTop: '10%'
  },
  footerContainer: {
    marginTop: '10%',
  },
  passwordContainer:{
    marginTop: '5%'
  },
  connexionButton: {
    width: '45%', 
    height: '8%', 
  },
  socialMedia: {
    display: 'flex',
    marginTop: '2%',
  }
});

export default styles;