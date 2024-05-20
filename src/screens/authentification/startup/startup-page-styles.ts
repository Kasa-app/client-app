import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const ratio = height / width;
const imageHeight = width * ratio - 220

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#C27129',
    },
    image: {
        width: '100%',
        height: imageHeight,
    },
    LogoTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    PickupTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: '10%',
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: '6%',
        marginStart: '14%',
    },

    inscriptionButton: {
        alignItems: 'center',
        backgroundColor: '#E67918',
        width: '35%',
        height: '100%',
        paddingTop:5,
        paddingBottom:5,
        borderRadius:4,
    },

    connexionButton: {
        alignItems: 'center',
        marginStart:'15%',
        width: '35%',
        height: '100%',
        paddingTop:5,
        paddingBottom:5,
        borderRadius:4,
        borderColor:'#E67918',
        borderWidth:2,
    },
    ButtonText: {
        color: '#FFF',
        fontFamily:'AvenirNext-Bold',
        fontSize:14
    },

    welcomeText: {
        marginTop: '7%',
        color: '#FFF',
        fontSize: 27,
        marginEnd: '10%',
        fontFamily: 'AvenirNext-Bold',
    },
    pickupLine1: {
        marginTop: '4%',
        color: '#FFF',
        fontSize: 15,
        marginEnd: '10%',
        fontFamily: 'AvenirNext-Regular',
    },
    pickupLine2: {
        color: '#FFF',
        fontSize: 15,
        marginEnd: '10%',
        fontFamily: 'AvenirNext-Regular',
    },
    appLogo: {
        width: 70,
        height: 66,
        marginStart: '5%',
        marginTop: '4%',
    }
});

export default styles;
