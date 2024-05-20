import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    marginTop: "30%",
  },
  buttonText: {
    fontSize: 16,
  },
  container: {
    padding: 20,
  },
  continueButton: {
    width: "75%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    borderRadius: 12,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    marginTop: 50,
  },
  input: {
      paddingStart:'5%',
      fontSize: 13
  },
  nomService: {
    color: '#000',
    marginLeft: 20,
    marginTop: 20,
  },
  stepperNameContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  stepperName: {
    color: '#E67918',
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default styles;