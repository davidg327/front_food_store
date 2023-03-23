import React from 'react';
import { Image, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from "moment";
import {ButtonComponent} from "../../component/button";

const SaleDayScreen = ({route}) => {

    let product = route.params.item;

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Text style={styles.title}>{product.name}</Text>
                <Image
                    source={{url: product.image}}
                    style={styles.image}
                />
                <Text style={styles.textTitleInput}>Día:</Text>
                <Text style={styles.textDate}>{moment().format('DD-MM-YYYY')}</Text>
                <Text style={styles.textTitleInput}>Cantidad de compra:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => console.log('')}
                    //defaultValue={'de prueba'}
                    placeholder={'Colocar la cantidad de compra del dia de hoy'}
                />
                <Text style={styles.textTitleInput}>Productos Vendidos:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => console.log('')}
                    //defaultValue={'de prueba'}
                    placeholder={'Cantidad de productos vendidos del día de hoy'}
                />
                <Text style={styles.textTitleInput}>Productos Averiados:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => console.log('')}
                    //defaultValue={'de prueba'}
                    placeholder={'Cantidad de productos averiados del día de hoy'}
                />
                <ButtonComponent
                />
            </KeyboardAwareScrollView>
        </View>
    )
};

export default SaleDayScreen;
