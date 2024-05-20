import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '10%',
    alignItems: 'center',
  },

  alignHorizontally: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: '5%',
  },

  passwordRestrictionText: {
    marginTop: '3%'

  },

  buttonContainer: {
    marginTop: '25%',
  },

  lastNameContainer: {
    marginTop: '3%',
  },

  continueButton: {
    width: '77%',
    height: '6%'
  }
});

export default styles;