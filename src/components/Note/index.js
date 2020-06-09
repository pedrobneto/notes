import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
import colors from "../../../util/colors";

const Note = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();

    function renderIcon() {
        if (isFavorite) {
            return <AntDesign name="star" size={25} color={colors.green} />
        } else {
            return <AntDesign name="staro" size={25} color={colors.green} />
        }
    }

    function toggleFavorite() {
        setIsFavorite(!isFavorite)
    }

    return (
        <View
            style={[styles.container]}
        >
            <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() => navigation.push('NoteScreen')}
            >
                <TouchableOpacity
                    style={styles.favoriteContainer}
                    onPress={toggleFavorite}
                >
                    {renderIcon()}
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}
export default Note;