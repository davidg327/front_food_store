import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TextInput, View} from "react-native";
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from "moment";
import {ButtonComponent} from "../../component/button";
import {getSaleDayYesterday} from "../../api/getSaleDayYesterday";
import {postSaleDay} from "../../api/postSaleDay";
import {useNavigation} from "@react-navigation/native";

const SaleDayScreen = ({route}) => {

    let product = route.params.item;
    let generalId = route.params.GeneralAccoundId;

    const navigation = useNavigation();

    const [sateDayYesterday, setSaleDayYesterday] = useState({});
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({});

    const setData = (key, value) => {
        setForm({
            ...form,
            [key]: value,
        });
    }

    let yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');

    useEffect(() => {
        getSaleDayYesterday(yesterday, product.id, setSaleDayYesterday);
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

    const createSaleDay = () => {
        let values = {
            buy_product: form?.buy ? parseInt(form.buy) : '',
            sale_product: form?.sale ? parseInt(form.sale) : '',
            broken_product: form?.broken ? parseInt(form.broken) : '',
            final_product_after_day: Object.keys(sateDayYesterday).length > 0 ? sateDayYesterday.final_product_inventory : 0,
            product_id: product.id,
            general_account_id: generalId,
        };
        postSaleDay(values, setSuccess);
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>{product.name}</Text>
                <Image
                    source={{uri: product.image}}
                    style={styles.image}
                />
                <Text style={styles.textTitleInput}>Día:</Text>
                <Text style={styles.textDate}>{moment().format('DD-MM-YYYY')}</Text>
                <Text style={styles.textTitleInput}>Cantidad de prodcutos que quedaron del día anterior</Text>
                <Text style={styles.textFinalProduct}>{Object.keys(sateDayYesterday).length > 0 ? sateDayYesterday.final_product_inventory : 0}</Text>
                <Text style={styles.textTitleInput}>Cantidad de compra:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setData('buy', text)}
                    value={form?.buy ? form.buy : ''}
                    inputMode={'numeric'}
                    placeholder={'Colocar la cantidad de compra del dia de hoy'}
                />
                <Text style={styles.textTitleInput}>Productos Vendidos:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setData('sale', text)}
                    value={form?.sale ? form.sale : ''}
                    inputMode={'numeric'}
                    placeholder={'Cantidad de productos vendidos del día de hoy'}
                />
                <Text style={styles.textTitleInput}>Productos Averiados:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setData('broken', text)}
                    value={form?.broken ? form.broken : ''}
                    inputMode={'numeric'}
                    placeholder={'Cantidad de productos averiados del día de hoy'}
                />
                <ButtonComponent
                    handle={createSaleDay}
                    text={'Guardar'}
                />
            </KeyboardAwareScrollView>
        </View>
    )
};

export default SaleDayScreen;
