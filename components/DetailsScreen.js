import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;
