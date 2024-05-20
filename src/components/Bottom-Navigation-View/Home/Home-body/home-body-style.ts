import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },

  homePic: {
    height: '98%',
    width: '80%',
    borderRadius:30,
    marginTop: '5%',
    marginStart:'2.5%'
  },
  homePicShimmer:{
    height:350,
    width: 480,
    borderRadius: 40,
    marginTop: 5,
    marginStart: 3
  },

  searchBarStyle: {
    width: '75%',
    marginStart: '5%',
    marginTop: '-28%'
  },

  listContainer: {
    marginTop: '5%',
    marginStart: '2%',
  },

  recommendedServicesContainer: {
    marginTop: '5%',
    marginStart: '2%',
    paddingBottom:'5%'
  },

  shimmerText:{
    marginTop: 5,
    maxWidth: 120,
  },

  cardContainer:{
    width: 120,
    height: 150,
    borderRadius:10,
  },

  cardContentTitle: {
    textAlign:'center',
    fontFamily: 'AvenirNext-Regular',
    color: '#C27129',
  },

  categorie: {
    marginStart: '4%',
    color: '#E67918',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 17
  },
  popularService: {
    marginTop: '5%',
    marginStart: '4%',
    color: '#E67918',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 17
  }

});

export default styles;