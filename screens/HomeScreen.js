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
  featureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -3, // Reduced margin to bring buttons closer to the calendar
    marginBottom: 10, // Adjusted for spacing below buttons if needed
  },
  featureButton: {
    backgroundColor: '#DAA520', // Old Gold color for the button
    paddingVertical: 10, // Vertical padding for button size
    paddingHorizontal: 20, // Horizontal padding for wider buttons
    borderRadius: 20,
    width: '45%', // Adjusted width for better spacing
    alignItems: 'center', // This centers the button text horizontally
    justifyContent: 'center', // This centers the button text vertically
  },
  featureButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', // Ensures the text is centered
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
        <View style={styles.featureButtonContainer}>
          <TouchableOpacity 
            style={styles.featureButton} 
            onPress={() => console.log("Coming Features Pressed")} // Update this onPress event as needed
          >
            <Text style={styles.featureButtonText}>Coming Features</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.featureButton} 
            onPress={() => navigation.navigate("ChapterAttendance")} // Assuming you have a screen/route named "ChapterAttendance"
          >
            <Text style={styles.featureButtonText}>Chapter Attendance</Text>
          </TouchableOpacity>
        </View>
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