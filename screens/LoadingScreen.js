import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', // Background color for the container
    },
    animationContainer: {
      alignItems: 'center', // Center the animation horizontally within the container
      marginRight: 0, // Adjust the margin to shift the animation to the right
    },
    animation: {
      width: 600, // Adjust the width of the animation
      height: 600, // Adjust the height of the animation
    },
    wordmark: {
      height: 50, // Reduced height
      resizeMode: 'contain',
      marginTop: 20, // You can adjust the margin as needed for positioning
    },
  });
  
  
function LoadingScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
          <View style={styles.animationContainer}>
            <LottieView
              source={require('../assets/AcaciaLoading.json')}
              autoPlay
              loop
              style={styles.animation}
              speed={1.0}
            />
          </View>
          <Image 
            source={require('../assets/AcaciaWordmarkBlack.png')}
            style={styles.wordmark}
          />
        </View>
      );
}

export default LoadingScreen;