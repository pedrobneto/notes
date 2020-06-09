import React from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput
} from 'react-native'

import styles from './styles'

const NoteScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>
                    This is my title
                </Text>
            </View>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.textStyle}
                    multiline={true}
                    placeholder='Type anything you want'
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NoteScreen);