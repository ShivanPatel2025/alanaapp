import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderColor: '#DAA520',
  },
  navButton: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const NavigationBar = ({ navigation }) => (
  <View style={styles.bottomNavigation}>
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate("GroupChat")}
    >
      <Image source={require("../assets/chat.png")} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate("Home")}
    >
      <Image source={require("../assets/home.png")} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate("Emergency")}
    >
      <Image source={require("../assets/siren.png")} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default NavigationBar;
