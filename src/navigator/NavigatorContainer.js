import React from 'react';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { navigationRef } from "../services/RootNavigation";
import ListProductsScreen from "../screens/listProducts";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'ListProducts'} component={ListProductsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
);
};

export default StackNavigator;
