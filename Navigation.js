import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

//Screen
import ProductsScreen from "./src/screens/products";
import SaleDayScreen from "./src/screens/saleDay";

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


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Product"
                    component={ProductStackScreen}
                    options={{
                        tabBarLabel: 'Productos',
                        tabBarIcon: ({color, size}) => (
                            <Entypo name="blackboard" size={30} color="black"/>
                        ),
                        tabBarLabelStyle: {color: 'black'}
                    }}
                />
                {/*
                <Tab.Screen name="Settings" component={SettingsStackScreen} />*/}
            </Tab.Navigator>
        </NavigationContainer>
    )
}
