import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventList } from "../components/events/EventList";
import { Pill } from "../components/Pill";
import { SportsFilters } from "../components/SportsFilters";

export const HomeScreen = React.memo(() => {

    // Fetch home screen batch call
    // 1. Sports Filters
    // 2. Event Lists 

    return (
        <SafeAreaView>
            <SportsFilters />
            <EventList />
        </SafeAreaView>
    );
})

export default HomeScreen;