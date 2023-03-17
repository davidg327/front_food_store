import React from 'react';
import {Text, TextInput, View} from "react-native";
import styles from "./styles";
import moment from "moment/moment";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const GeneralAccountScreen = ({}) => {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Text style={styles.title}>{'Gasto general del día'}</Text>
                <Text style={styles.textTitleInput}>Día:</Text>
                <Text style={styles.textDate}>{moment().format('DD-MM-YYYY')}</Text>
                <Text style={styles.textTitleInput}>Cantidad de gasto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => console.log('')}
                    //defaultValue={'de prueba'}
                    placeholder={'Colocar la cantidad de gasto del dia de hoy'}
                />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default GeneralAccountScreen;
