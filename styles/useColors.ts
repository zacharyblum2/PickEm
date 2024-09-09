import { useColorScheme } from 'react-native';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

// Create a react-hook that returns contents of LightTheme or DarkTheme
const useColors = () => {
    const colorScheme = useColorScheme(); // 'light' or 'dark'

    if (colorScheme === 'dark') {
        return DarkTheme.colors;
    } else {
        return LightTheme.colors;
    }
};

export default useColors;