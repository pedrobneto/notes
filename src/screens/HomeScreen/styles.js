import { StyleSheet } from 'react-native';
import colors from '../../../util/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },

    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: colors.black
    },

    floatingButtonContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        bottom: 20,
        right: 20,
        height: 70,
        width: 70,
        borderRadius: 35,
    },
});

export default styles;