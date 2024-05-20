import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 12,
    marginBottom: 12,
  },
  line: {
    flex: 0.8,
    height: 1.5,
    backgroundColor: '#E67918',
  },
  noJobbersContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: "100%"
  },
  noJobbersText: {
    fontSize: 20,
    fontFamily: "AvenirNext-Bold",
    color: '#E67918',
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  goBackButtonText: {
    fontSize: 15,
    fontFamily: "AvenirNext-Bold",
  }
});

export default styles;