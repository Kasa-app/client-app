import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#E67918',
    },
    verticleLine: {
        marginStart:'3%',
        marginTop:'1.5%',
        height: '67%',
        width: 1,
        backgroundColor: '#707070',
    },
    backButton:{
        marginStart:'3%',
        marginTop:'1.5%',
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        marginStart:'2%',
        marginTop:'0.5%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default styles;