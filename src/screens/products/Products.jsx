import React from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from "react-native";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = ({}) => {

    const navigation = useNavigation();

    const products = [
        {
            id: '1',
            url: 'https://cdn7.kiwilimon.com/recetaimagen/69/11549.jpg',
            title: 'Empanadas de papa carne',
        },
        {
            id: '2',
            url: 'https://cdn7.kiwilimon.com/recetaimagen/69/11549.jpg',
            title: 'Empanada de pollo arroz',
        },
        {
            id: '3',
            url: 'https://queapetito.com/wp-content/uploads/2019/12/arepas-de-huevo-colombianas-1200-amp.jpg',
            title: 'Arepa de huevo',
        },
    ];

    const Item = ({item}) => (
        <Pressable
            onPress={() => navigation.navigate('SaleDay')}
            style={styles.containerCard}>
            <ImageBackground
                source={{url: item.url}}
                style={styles.containerProduct}
                imageStyle={styles.border}
            >
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.5)"]}
                    style={styles.gradient}>
                    <Text style={styles.title}>{item.title}</Text>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={Item}
                numColumns={2}
                style={styles.flatList}
                contentContainer={styles.contentContainer}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </View>
    )
}

export default ProductsScreen;
