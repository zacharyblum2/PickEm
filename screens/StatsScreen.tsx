import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StatsScreen = React.memo(() => {
    return (
        <SafeAreaView>
            <Text>Stats Screen</Text>
        </SafeAreaView>
    );
})

export default StatsScreen;