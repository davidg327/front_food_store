import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import ProductsScreen from "./src/screens/products";
import SaleDayScreen from "./src/screens/saleDay";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Products'}
            >
                <Stack.Screen
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
                <Stack.Screen
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
