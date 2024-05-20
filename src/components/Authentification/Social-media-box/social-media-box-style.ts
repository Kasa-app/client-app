import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '80%',
        paddingVertical: 18,
        marginStart: '10%',
        marginTop: undefined,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'stretch',
        backgroundColor: '#FFF3E9',
    },
    title: {
        marginStart: '30%',
        fontFamily: 'AvenirNext-Regular',
        fontSize: 13,
        color: 'black',
    },
    mediaSocialContainer: {
        marginEnd: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'stretch',
        backgroundColor: '#FFF3E9',
    },
    appleLogo: {
        marginTop: '12%',
        marginStart: '30%',
    },
    gmailFbLogo: {
        marginTop: '12%',
        marginStart: '15%',
    }
});

export default styles;