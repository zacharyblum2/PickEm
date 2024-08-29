import React from "react";
import { Text, View, StyleSheet, FlexAlignType } from "react-native";

export type PillFilter = {
    id: string,
    title: string,
    value: string,
    onPress: () => void
}

export const Pill = React.memo((props: PillFilter) => {

    const { title, value, onPress } = props;

    return (
        <View style={pillStyles.pill}>
            <Text style={pillStyles.text}>{title}</Text>
        </View>
    )
})

const pillStyles = StyleSheet.create({
    pill: {
        borderWidth: 1,
        borderRadius: 20, 
        width: 100,
        height: 30,
        backgroundColor: 'grey',
        borderColor: 'grey',
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center' as FlexAlignType, 
    }
})