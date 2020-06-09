import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

import { connect } from 'react-redux'
import { addNote } from '../../redux/actions'
import { Feather } from '@expo/vector-icons';
import Note from '../../components/Note'
import styles from './styles'

const HomeScreen = (props) => {

    function createNote() {
        const note = {
            isFavorite: false,
            text: 'Text',
            title: 'Last',
        }

        props.dispatch(addNote(note))
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {props.notes.map((note, i) => (
                    <Note title={note.title} key={i} />
                )).reverse()}
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButtonContainer}
                onPress={createNote}
            >
                <Feather name="plus" size={35} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => {
    console.log(state.notes)

    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(HomeScreen);