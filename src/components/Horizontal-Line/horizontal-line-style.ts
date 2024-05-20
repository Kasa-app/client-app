import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    firstHorizontalLine: {
        marginTop:'5%',
        width: '35%',
        height: 1.5,
        backgroundColor: '#707070',
    },
    fullLine: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#707070',
    },
    secondHorizontalLine: {
        marginStart:'15%',
        marginTop:'5%',
        width: '35%',
        height: 1.5,
        backgroundColor: '#707070',
    },
});

export default styles;