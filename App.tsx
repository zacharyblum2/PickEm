import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BrowseStackNavigator from './navigation/BrowseStackNavigator';
import HomeStackNavigator from './navigation/HomeStackNavigator';
import SocialStackNavigator from './navigation/SocialStackNavigator';
import ProfileStackNavigator from './navigation/ProfileStackNavigator';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const BottomTabNavigator = React.memo(() => {

  return (
    <Tab.Navigator
      initialRouteName={"HomeTab"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';

        //   switch (route.name) {
        //     case 'Home':
        //         iconName = focused ? 'home' : 'home-outline';
        //     case 'Browse':
        //         iconName = focused ? 'search' : 'search-outline';
        //     case 'Social':
        //         iconName = focused ? 'people' : 'people-outline';
        //     case 'Profile':
        //         iconName = focused ? 'person-circle' : 'person-circle-outline';
        //   }

          // You can return any component that you like here!
          return <Ionicons name={'search'} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="BrowseTab" component={BrowseStackNavigator} />
      <Tab.Screen name="SocialTab" component={SocialStackNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
});

export default App;
