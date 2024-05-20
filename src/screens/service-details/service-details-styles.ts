import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    width: "75%",
    marginBottom: 15,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    color: "#FFF",
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  descriptionContainer: {
    padding: 25,
  },
  image: {
    width: '100%',
    height: 365,
    backgroundColor:'gray',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    color: '#E67918',
    fontSize: 15,
    fontFamily: 'AvenirNext-Regular',
    paddingRight: 15,
  },
  title: {
    color: '#E67918',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
  }
});

export default styles;
