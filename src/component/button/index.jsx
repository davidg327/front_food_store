import React from 'react';
import styles from "./styles";
import {Text, TouchableOpacity} from "react-native";

export const ButtonComponent = ({handle, text}) => {
    return (
        <TouchableOpacity
            style={styles.containerButton}
            onPress={handle}
        >
            <Text
                style={styles.text}
            >{text}</Text>
        </TouchableOpacity>
    )
}
