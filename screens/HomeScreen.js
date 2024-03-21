import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import WeekCalendar from '../components/WeeklyCalendar.js'; // Ensure this path is correct

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
    textAlign: 'center',
    padding: 10,
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
  },
  eventScrollView: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
  },
  eventTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventTime: {
    color: 'black',
    fontSize: 14,
  },
});

// Dummy events data
const events = [
  { name: "Aphi Exchange", date: "3/20", time: "8PM-12AM" },
  { name: "Find The Forty", date: "3/22", time: "9PM-11PM" },
  { name: "Dayger", date: "3/23", time: "1PM-4PM" },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.wordmarkContainer}>
          <Image source={require('../assets/AcaciaWordmarkWhite.png')} style={{ height: 50, resizeMode: 'contain' }} />
        </View>
        <Text style={styles.upcomingEventsHeader}>Upcoming Events</Text>
        
        {/* Horizontal scroll view of events */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventScrollView}>
          {events.map((event, index) => (
            <View key={index} style={styles.eventCard}>
              <Text style={styles.eventTitle}>{event.name}</Text>
              <Text style={styles.eventTime}>{`${event.date} | ${event.time}`}</Text>
            </View>
          ))}
        </ScrollView>

        <WeekCalendar />
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("GroupChat")}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("EmergencyNotification")}>
          <Image source={require('../assets/siren.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;