import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E67918',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nbrContainer: {
    flex: 1,
    alignItems: 'center',
  },
  nbrCountText: {
    color: '#3B3131',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
