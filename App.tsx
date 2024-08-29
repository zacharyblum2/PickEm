import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsStackNavigator } from './navigation/StatsStackNavigator';
import HomeStackNavigator from './navigation/HomeStackNavigator';
import { CommunityStackNavigator } from './navigation/CommunityStackNavigator';
import ProfileStackNavigator from './navigation/ProfileStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};


const BottomTabNavigator = React.memo(() => {

  return (
    <Tab.Navigator
      initialRouteName={"HomeTab"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home-outline';

            switch (route.name) {
                case 'Home':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                case 'Stats':
                    iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    break;
                case 'Community':
                    iconName = focused ? 'people' : 'people-outline';
                    break;
                case 'Profile':
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                    break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Community" component={CommunityStackNavigator} />
      <Tab.Screen name="Stats" component={StatsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
});

export default App;
