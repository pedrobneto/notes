import { StyleSheet } from 'react-native';

import colors from '../../../util/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    textContainer: {
        width: '100%',
        flex: 9,
    },

    titleStyle: {
        fontSize: 24,
        color: colors.green
    },

    textStyle: {
        flex: 1,
        textAlignVertical: 'top',
        color: colors.white
    }


})

export default styles;