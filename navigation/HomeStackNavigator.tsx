import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = React.memo(() => {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
});

export default HomeStackNavigator