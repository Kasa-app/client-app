import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  jobberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobberAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E67918',
    overflow: 'hidden',
  },
  jobberInfo: {
    flexDirection: 'column'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  fullName: {
    color: '#000',
    fontFamily: 'AvenirNext-Bold',
    paddingLeft: 20,
    fontSize: 20
  },
  infoText: {
    color: '#000',
    paddingLeft: 10,
    fontSize: 15
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 25,
    marginBottom: 12,
  },
  noComment: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  line: {
    flex: 0.95,
    height: 1.5,
    backgroundColor: '#E67918',
  },
  skillsContainer: {
    flexDirection: 'row',
  },
  skillsText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'AvenirNext-Bold',
  },
  commentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 26,
    marginTop: 40,
  },
  commentContainer: {
    paddingRight: 15,
  },
  salaryText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'AvenirNext-Bold',
    padding: 20
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  buttonContainer: {
    marginRight: 25,
  }
});

export default styles;