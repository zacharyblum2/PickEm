import React from "react";
import { FlatList, ScrollView, View } from "react-native";

type SelectionBarProps {

}

export const SelectionBar = React.memo((props: SelectionBarProps ) => {
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
})