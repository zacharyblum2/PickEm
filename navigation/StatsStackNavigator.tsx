import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatsScreen } from "../screens/StatsScreen";

const StatsStack = createNativeStackNavigator();

export const StatsStackNavigator = React.memo(() => {

    return (
        <StatsStack.Navigator screenOptions={{ headerShown: false }}>
            <StatsStack.Screen name="BrowseScreen" component={StatsScreen} />
        </StatsStack.Navigator>
    )
});

export default StatsStackNavigator