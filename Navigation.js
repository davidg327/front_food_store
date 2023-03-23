import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//Screen
import ProductsScreen from "./src/screens/products";
import SaleDayScreen from "./src/screens/saleDay";
import GeneralAccountScreen from "./src/screens/generalAccount";

const ProductStack = createNativeStackNavigator();

function ProductStackScreen() {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen
                name={'Products'}
                component={ProductsScreen}
                options={{
                    title: 'Lista de productos',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            />
            <ProductStack.Screen
                name={'SaleDay'}
                component={SaleDayScreen}
                options={{
                    title: 'Día de venta',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerBackTitle: 'volver'
                }}
            />
        </ProductStack.Navigator>
    );
}

const GeneralAccountStack = createNativeStackNavigator();

function GeneralAccountStackScreen () {
    return (
        <ProductStack.Navigator>
            <GeneralAccountStack.Screen
                name={'GeneralAccount'}
                component={GeneralAccountScreen}
                options={{
                    title: 'Cuenta General',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            />
        </ProductStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="Product"
                    component={ProductStackScreen}
                    options={{
                        tabBarLabel: 'Productos',
                        tabBarIcon: ({color, size}) => (
                            <AntDesign name="shoppingcart" size={30} color="black" />
                        ),
                        tabBarLabelStyle: {color: 'black'}
                    }}
                />
                <Tab.Screen
                    name="GeneralAccounts"
                    component={GeneralAccountStackScreen}
                    options={{
                        tabBarLabel: 'Cuenta General',
                        tabBarIcon: ({color, size}) => (
                            <AntDesign name="setting" size={30} color="black" />
                        ),
                        tabBarLabelStyle: {color: 'black'}
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
