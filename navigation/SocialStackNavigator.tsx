import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SocialScreen from "../screens/SocialScreen";

const SocialStack = createNativeStackNavigator();

export const SocialStackNavigator = React.memo(() => {

    return (
        <SocialStack.Navigator>
            <SocialStack.Screen name="Social" component={SocialScreen} />
        </SocialStack.Navigator>
    )
});

export default SocialStackNavigator