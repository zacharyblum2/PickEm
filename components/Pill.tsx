import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import useColors from '../styles/useColors';
import { appTheme, Colors } from '../styles/Theme';

export interface PillFilter {
    id: string;
    title: string;
    value: string;
    onPress: () => void;
    selected?: boolean
}

export const Pill = React.memo((props: PillFilter) => {
    const { title, value, onPress, selected } = props;

    const colors = useColors();

    const styles = getStyles(colors);

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.pill, 
                ( selected ? styles.selectedPill : styles.unselectedPill  )// Change color based on selection
            ]}
        >
            <Text style={[ styles.textStyle, { color: selected ? colors.white : colors.textPrimary }]}>{title}</Text>
        </TouchableOpacity>
    );
});

const getStyles = (colors: Colors) => StyleSheet.create({
    pill: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        minWidth: 80,
    },
    selectedPill: {
        backgroundColor: colors.primary,  // Dynamic color for selected pill
        borderColor: colors.primary,      // Dynamic border color
    },
    unselectedPill: {
        backgroundColor: colors.white, // Dynamic color for unselected pill
        borderColor: colors.textPrimary,    // Dynamic border color
    },
    textStyle: {
        fontWeight: 500,
        fontSize: 15,
    }
});
