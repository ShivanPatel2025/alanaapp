import React, { useEffect } from 'react';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import HomeScreen from "../screens/HomeScreen.js";
import DetailsScreen from "../screens/DetailsScreen.js";
import PlantsScreen from "../screens/PlantsScreen.js";
import LoadingScreen from "../screens/LoadingScreen.js";
import WelcomeScreen from '../screens/WelcomeScreen.js';

const Stack = createStackNavigator();

function AppNavigation() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <Stack.Navigator initialRouteName="Loading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Plants" component={PlantsScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
