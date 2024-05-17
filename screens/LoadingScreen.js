import React from 'react';
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFFF7',
    },
    animationContainer: {
      alignItems: 'center', 
      marginRight: 0, 
    },
    animation: {
      width: 600, 
      height: 600, 
    },
    wordmark: {
      height: 100,
      resizeMode: 'contain',
      marginTop: -50, 
    },
  });
  
  
function LoadingScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
          <Image 
            source={require('../assets/alana_logo_text.png')}
            style={styles.wordmark}
          />
        </View>
      );
}

export default LoadingScreen;