import React from 'react';
import styles from "./styles";
import {Text, TouchableOpacity} from "react-native";

export const ButtonComponent = ({}) => {
    return (
        <TouchableOpacity
            style={styles.containerButton}
        >
            <Text
                style={styles.text}
            >Guardar</Text>
        </TouchableOpacity>
    )
}
