import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        minWidth: '30%',
        paddingVertical: 7,
        borderRadius: 4,
        backgroundColor: '#E67918',
    },
    buttonDisabled: {
        backgroundColor: '#E2B288',
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'AvenirNext-Regular',
        fontSize: 13
    },
    buttonTextWhenButtonDisabled: {
        color: 'gray',
    },
});

export default styles;
