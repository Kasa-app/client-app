import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    button: {
        width: '35%',
        height: '25%',
        borderRadius:4,
        borderColor:'#E67918',
        borderWidth:2,
    },
    ButtonText: {
        textAlign:'center',
        marginTop:'3%',
        color: '#FFF',
        fontFamily:'AvenirNext-Bold',
        fontSize:13
    },

});

export default styles;
