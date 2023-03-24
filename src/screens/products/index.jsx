import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from "react-native";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {getProducts} from "../../api/getProducts";
import {getGeneralAccount} from "../../api/getGeneralAccount";

const ProductsScreen = ({}) => {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [generalId, setGeneralId] = useState(0);

    useEffect(() => {
        (async () => {
            let products = await getProducts();
            setProducts(products.data.data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            let generalAccount = await getGeneralAccount();
            setGeneralId(generalAccount.data.data.id);
        })();
    }, []);

    const Item = ({item}) => (
        <Pressable
            onPress={() => navigation.navigate('SaleDay', {item: item, GeneralAccoundId: generalId})}
            style={styles.containerCard}>
            <ImageBackground
                source={{uri: item.image}}
                style={styles.containerProduct}
                imageStyle={styles.border}
            >
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.5)"]}
                    style={styles.gradient}>
                    <Text style={styles.title}>{item.name}</Text>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={Item}
                numColumns={2}
                style={styles.flatList}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </View>
    )
}

export default ProductsScreen;
