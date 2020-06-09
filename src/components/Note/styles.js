import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../util/colors'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.4,
        height: screenWidth * 0.4,
        margin: 15,
        backgroundColor: colors.gray,
        borderRadius: 10,
    },

    touchableContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    favoriteContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        height: 25,
        width: 25,
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
    }
});

export default styles;