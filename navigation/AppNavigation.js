import React, { useEffect } from 'react';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import HomeScreen from "../screens/HomeScreen.js";
import ScanScreen from "../screens/ScanScreen.js";
import GroupChatScreen from "../screens/GroupChatScreen.js";
import LoadingScreen from "../screens/LoadingScreen.js";
import WelcomeScreen from '../screens/WelcomeScreen.js';
import ChapterAttendanceScreen from "../screens/ChapterAttendanceScreen.js";

const Stack = createStackNavigator();

function AppNavigation() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3200);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="GroupChat" component={GroupChatScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen name="ChapterAttendance" component={ChapterAttendanceScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
