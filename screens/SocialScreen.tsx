import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SocialScreen = React.memo(() => {
    return (
        <SafeAreaView>
            <Text>Social Screen</Text>
        </SafeAreaView>
    );
})

export default SocialScreen;