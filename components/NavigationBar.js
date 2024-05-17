// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/home_icon.png')} style={styles.icon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Scan')}>
        <Image source={require('../assets/scan_icon.png')} style={styles.icon} />
        <Text style={styles.navText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Me')}>
        <Image source={require('../assets/profile_icon.png')} style={styles.icon} />
        <Text style={styles.navText}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#F9FBF8",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.95,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  navText: {
    textAlign: "center",
  },
});

export default NavigationBar;
