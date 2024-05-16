// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/home_icon.png')} style={styles.icon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
        <Image source={require('../assets/scan_icon.png')} style={styles.icon} />
        <Text>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Me')}>
        <Image source={require('../assets/profile_icon.png')} style={styles.icon} />
        <Text>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee'
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5
  }
});

export default NavigationBar;
