import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BrowseScreen from "../screens/BrowseScreen";

const BrowseStack = createNativeStackNavigator();

export const BrowseStackNavigator = React.memo(() => {

    return (
        <BrowseStack.Navigator>
            <BrowseStack.Screen name="Browse" component={BrowseScreen} />
        </BrowseStack.Navigator>
    )
});

export default BrowseStackNavigator