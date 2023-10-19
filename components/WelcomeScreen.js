import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Plantly!</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default WelcomeScreen;