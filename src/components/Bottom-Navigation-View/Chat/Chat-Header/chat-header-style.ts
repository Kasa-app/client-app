import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#E67918',
    flexDirection: 'row',
    paddingBottom: '5%',
  },

  avatar: {
    marginStart: '9%',
    marginTop: '3%',
  },

  userName:{
    color:"#FFFFFF",
    fontFamily: 'AvenirNext-Bold',
    marginTop:'5%',
    marginStart:'3%',
    fontSize:15
  },

  phoneIcon: {
    marginStart:'70%',
    marginTop:'8%',
    color: '#FFF'
  },
})

export default styles;