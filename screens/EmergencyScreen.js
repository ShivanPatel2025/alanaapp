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
  },
});

function EmergencyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Emergency Screen</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default EmergencyScreen;
