import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maintenanceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 16,
  },
  maintenanceTitle: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 40,
  },
  maintenanceText: {
    color: '#000',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
  }
});

export default styles;
