import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = React.memo(() => {
    return (
        <SafeAreaView>
            <Text>Profile Screen</Text>
        </SafeAreaView>
    );
})

export default ProfileScreen;