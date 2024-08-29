import React, { useCallback } from "react";
import { View, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Pill, PillFilter } from "./Pill";

export const SportsFilters = React.memo(() => {

    // Get sports filters from store
    const filters: PillFilter[] = [
        { id: '0', title: 'All', value: 'ALL', onPress: () => {} },
        { id: '1', title: 'NCAAF', value: 'NCAAF', onPress: () => {}},
        { id: '2', title: 'NCAAMB', value: 'NCAAMB', onPress: () => {}},
        { id: '3', title: 'NFL', value: 'NFL', onPress: () => {}},
        { id: '4', title: 'NBA', value: 'NBA', onPress: () => {}},

    ]

    const renderItem = useCallback(({item}: {item: PillFilter}) => {
        return <Pill {...item} />
    }, []);

    return (
        <View>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft: 10}}
            >
                <FlatList 
                    data={filters}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    contentContainerStyle={{ gap: 10 }}
                />
            </ScrollView>
        </View>
    )
});