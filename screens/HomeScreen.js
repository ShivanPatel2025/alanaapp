import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView, FlatList } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DAA520', // Old Gold color
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wordmarkContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  upcomingEventsHeader: {
    color: '#DAA520', // Old Gold for the header text
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  upcomingEventsContainer: {
    paddingHorizontal: 10,
  },
  eventCard: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventTitle: {
    color: '#DAA520',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 14,
    color: '#DAA520',
  },
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
    marginBottom: 5,
  },
});

const events = [
  { title: "Aphi Exchange", date: "3/20", time: "8PM-12AM" },
  { title: "Find The Forty", date: "3/22", time: "9PM-11PM" },
  { title: "Dayger", date: "3/23", time: "1PM-4PM" },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.wordmarkContainer}>
          <Image source={require('../assets/AcaciaWordmarkWhite.png')} style={{ height: 50, resizeMode: 'contain' }} />
        </View>
        <Text style={styles.upcomingEventsHeader}>Upcoming Events</Text>
        <FlatList
          horizontal
          data={events}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upcomingEventsContainer}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDetails}>{item.date} | {item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("GroupChat")}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
          {/* <Text style={{ color: '#DAA520' }}>Chat</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          {/* <Text style={{ color: '#DAA520' }}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("EmergencyNotification")}>
          <Image source={require('../assets/siren.png')} style={styles.icon} />
          {/* <Text style={{ color: '#DAA520' }}>Emergency</Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
