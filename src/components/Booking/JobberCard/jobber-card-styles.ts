import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
  },
  cardContainer: {
    padding: 16,
  },
  commentsCount: {
    marginLeft: 5,
  },
  moreInfo: {
    marginTop: 15,
    flexDirection: 'row',
  },
  moreInfoText: {
    color: '#000',
    paddingLeft: 10
  },
  jobberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobberInfo: {
    flexDirection: 'column',
    marginLeft: 15,
    flex: 1
  },
  jobberAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E67918',
    overflow: 'hidden',
  },
  name: {
    color: '#000',
  },
  nameSalaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  salary: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 16,
    color: '#000'
  },
  starsContainer: {
    flexDirection: 'row',
  },
});

export default styles;
