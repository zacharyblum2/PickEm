import React, { useState, useCallback } from "react";
import { View, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Pill, PillFilter } from "./Pill";

export const SportsFilters = React.memo(() => {

    // State to track the selected filter
    const [selectedFilter, setSelectedFilter] = useState('ALL'); // 'ALL' is default selected

    // Get sports filters from store
    const filters: PillFilter[] = [
        { id: '0', title: 'All', value: 'ALL', onPress: () => handleFilterSelect('ALL') },
        { id: '1', title: 'NCAAF', value: 'NCAAF', onPress: () => handleFilterSelect('NCAAF') },
        { id: '2', title: 'NCAAMB', value: 'NCAAMB', onPress: () => handleFilterSelect('NCAAMB') },
        { id: '3', title: 'NFL', value: 'NFL', onPress: () => handleFilterSelect('NFL') },
        { id: '4', title: 'NBA', value: 'NBA', onPress: () => handleFilterSelect('NBA') },
    ];

    // Handle pill selection
    const handleFilterSelect = (value: string) => {
        setSelectedFilter(value);
        console.log(`+++++Filter ${value}`);
    };

    // Render each pill with selected/unselected styles
    const renderItem = useCallback(({ item }: { item: PillFilter }) => {
        const isSelected = selectedFilter === item.value;
        return <Pill {...item} selected={isSelected} />;
    }, [selectedFilter]);

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
    );
});
