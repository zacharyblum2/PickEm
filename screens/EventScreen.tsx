import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const EventScreen = React.memo(() => {
    return (
        <SafeAreaView>
            <Text>Title</Text>
        </SafeAreaView>
    );
})

export default EventScreen;