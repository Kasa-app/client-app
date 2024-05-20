import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '10%',
    alignItems: 'center',
  },

  input: {
    width: '90%',
    height: '20%',
    paddingTop: '2%',
    paddingStart: '5%',
    borderRadius: 12,
    borderColor: '#E67918',
    borderWidth: 1,
    color: 'gray'
  },

  inputError: {
    marginTop: '2%',
    color: 'red',
    marginStart: '2%'
  },

  buttonContainer: {
    marginTop: '15%',
  },

  continueButton: {
    width: '77%',
    height: '28%'
  },

  restrictionText: {
    fontFamily: 'AvenirNext-Regular',
    color: 'gray',
    fontSize: 15
  }
});

export default styles;