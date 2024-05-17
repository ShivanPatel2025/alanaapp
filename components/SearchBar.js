// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/magnify.png")} // Add your magnifying glass icon image here
        style={styles.icon}
      />
      <TextInput
        placeholder="Search Product"
        placeholderTextColor="#616161"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 27,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  }
});

export default SearchBar;
