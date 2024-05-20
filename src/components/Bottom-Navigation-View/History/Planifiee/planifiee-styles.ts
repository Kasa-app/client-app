import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cardView: {
        flexDirection: 'row'
      },
      textContainerColumn:{
        flexDirection:'column',
      },
      textContainerRow:{
        flexDirection:'row',
        marginTop:'3%'
      },
      bottomContainer:{
        flexDirection:'column',
        marginTop:'40%',
        marginStart:'10%',
        justifyContent:'center',
        alignItems:'center'
      },

      cardContainer: {
        width: 90,
        height: 100,
        borderRadius: 12,
        marginStart: '15%',
        marginTop: '18%'
      },
      cardShimmer:{
        height:150,
        width: 130,
        borderRadius: 30,
        marginTop: 15,
        marginStart: 13
      },
      serviceNameTitle:{
        color:'#C27129',
        fontFamily:'AvenirNext-Regular',
        marginTop:'15%',
        fontSize:13
      },

      dataText:{
        color:'black',
        fontFamily:'AvenirNext-Regular',
        marginTop:'35%',
        fontSize:13
      },

      dateHourTitle:{
        color:'#C27129',
        fontFamily:'AvenirNext-Regular',
        marginTop:'5%',
        fontSize:13
      },

      adresseTitle:{
        color:'#C27129',
        fontFamily:'AvenirNext-Regular',
        marginTop:'5%',
        fontSize:13
      },

      button: {
        borderRadius: 18,
        width: "75%",
      },
      buttonText: {
        fontSize: 15,
        color: "#FFF",
      },

      separator: {
        marginTop: '5%',
        marginStart: '5%',
        width: '90%',
        height: 4,
        borderRadius: 3,
        backgroundColor: '#C27129',
      },
})