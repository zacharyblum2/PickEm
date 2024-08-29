import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

export const ProfileStackNavigator = React.memo(() => {

    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
});

export default ProfileStackNavigator