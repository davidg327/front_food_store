import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, View} from "react-native";
import styles from "./styles";
import moment from "moment/moment";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {ButtonComponent} from "../../component/button";
import {postGeneralAccount} from "../../api/postGeneralAccount";
import {useNavigation} from "@react-navigation/native";
import {getGeneralAccount} from "../../api/getGeneralAccount";

const GeneralAccountScreen = ({}) => {

    const navigation = useNavigation();

    const [expense, setExpense] = useState('');
    const [success, setSuccess] = useState(false);
    const [generalId, setGeneralId] = useState(0);

    useEffect(() => {
        (async () => {
            let generalAccount = await getGeneralAccount();
            setGeneralId(generalAccount.data.data.id);
        })();
    }, []);

    useEffect(() => {
        if(success){
            Alert.alert(
                //title
                'Gracias',
                //body
                'Se ha guardado, la información correctamente',
                [
                    { text: 'Volver',
                        onPress: () =>
                        {
                            setSuccess(false);
                            navigation.goBack();
                        }}
                    ,
                ],
            );
        }
    }, [success]);

    const createGeneralAccount = () => {
        postGeneralAccount(generalId, expense, setSuccess);
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Text style={styles.title}>{'Gasto general del día'}</Text>
                <Text style={styles.textTitleInput}>Día:</Text>
                <Text style={styles.textDate}>{moment().format('DD-MM-YYYY')}</Text>
                <Text style={styles.textTitleInput}>Cantidad de gasto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setExpense(text)}
                    value={expense}
                    inputMode={'numeric'}
                    placeholder={'Colocar la cantidad de gasto del dia de hoy'}
                />
                <ButtonComponent
                    text={'Guardar'}
                    handle={createGeneralAccount}
                />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default GeneralAccountScreen;
