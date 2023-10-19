import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import HomeScreen from "../components/HomeScreen.js";
import DetailsScreen from "../components/DetailsScreen.js";
import PlantsScreen from "../components/PlantsScreen.js";
import LoadingScreen from "../components/LoadingScreen.js";

const Stack = createStackNavigator();

function AppNavigation() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Plants" component={PlantsScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
