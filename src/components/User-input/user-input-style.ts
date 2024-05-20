import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
      },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius:12,
        borderColor:'#E67918',
        borderWidth:1,
    },
    eyesIcon:{
        marginTop:'35%'
    },
    input: {
        paddingStart:'5%',
        width: '88%',
        height: '85%',
        fontSize:13
    },
    inputError:{
        marginTop:'2%',
        color:'red',
        marginStart:'2%'
    }

});

export default styles;
