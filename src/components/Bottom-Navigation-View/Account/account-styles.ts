import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  profileContainer: {
    marginTop: 10,
    flexDirection: 'column',
  },
  profileAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#E67918',
    overflow: 'hidden',
  },
  nameText: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 35,
    lineHeight: 40,
  },
  memberText: {
    color: '#ababab',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
  },
  dateText: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 20,
  },
  creationDateContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginTop: 20,
    paddingLeft: 2
  },
  chevronRightOption: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  optionsContainer: {
    marginTop: 40,
  },
  optionCategoryText: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
  },
  option: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 16,
    paddingLeft: 20,
  },
  optionCircleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7e0bc',
    overflow: 'hidden',
  },
  logoutButtonContainer: {
    alignItems: 'flex-start',
    marginTop: 40,
  },
  logoutButtonText: {
    color: '#000',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 15,
  },
  logoutButton: {
    paddingRight: 20,
    paddingLeft: 20,
  }
});

export default styles;
