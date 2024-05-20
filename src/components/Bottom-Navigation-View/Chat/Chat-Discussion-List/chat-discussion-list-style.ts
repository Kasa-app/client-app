import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        marginTop:'5%',
        flexDirection: 'row', 
        padding: 10,
        marginBottom:'5%',
        borderBottomWidth: 1, 
        borderBottomColor: '#E67918' 
    },

    avatar:{
        borderRadius: 25, 
        marginRight: 10
    },

    userName:{
        color:'black',
        fontSize: 18, 
        fontFamily: 'AvenirNext-Bold',
    },
    
    time:{
        end:0,
        marginTop:'5%',
        color: 'black',
        position:'absolute'
    },

    messageTitle:{
        color:'#E67918',
        fontFamily: 'AvenirNext-Bold',
        fontSize:20

    },

    message:{
        color:'black',
        fontFamily: 'AvenirNext-Regular',
    }
    
  
});

export default styles;