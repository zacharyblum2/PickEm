import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/EventScreen";

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = React.memo(() => {

    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="EventScreen" component={EventScreen} />
        </HomeStack.Navigator>
    )
});

export default HomeStackNavigator