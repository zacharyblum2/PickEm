import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

export const ProfileStackNavigator = React.memo(() => {

    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
});

export default ProfileStackNavigator