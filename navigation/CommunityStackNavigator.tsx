import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SocialScreen from "../screens/SocialScreen";

const CommunityStack = createNativeStackNavigator();

export const CommunityStackNavigator = React.memo(() => {

    return (
        <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
            <CommunityStack.Screen name="SocialScreen" component={SocialScreen} />
        </CommunityStack.Navigator>
    )
});

export default CommunityStackNavigator