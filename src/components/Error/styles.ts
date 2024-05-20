import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonError: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '35%',
    paddingVertical: 7,
    borderRadius: 4,
    backgroundColor: '#E67918',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: 'red',
    fontSize: 18,
    marginBottom: 16,
  },
  retryButton: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
