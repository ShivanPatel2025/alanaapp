// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
        <Text>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Me')}>
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
  }
});

export default NavigationBar;
