import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  searchBar: {
    width: '90%',
    marginTop: '2%',
    marginStart: '5%'
  },
  separator: {
    marginTop: '5%',
    marginStart: '5%',
    width: '90%',
    height: 4,
    borderRadius: 3,
    backgroundColor: '#E67918',
  },

  listContainer: {
    marginTop: '5%',
    marginStart: '2%',
  },
  cardContainer: {
    color:'gray',
    width: 90,
    height: 100,
    borderRadius: 12,
    marginStart: '15%',
    marginTop: '18%'
  },
  arrowStyle: {
    marginTop: '18%',
    marginStart:'20%'
  },

  cardView: {
    flexDirection: 'row'
  },
  serviceName: {
    marginTop: '10%',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 13,
    color: '#000'
  },
  cardShimmer:{
    height:150,
    width: 130,
    borderRadius: 30,
    marginTop: 15,
    marginStart: 13
  },
  serviceNameShimmer:{
    marginStart:'3%',
    marginTop:'16%'
  }


})