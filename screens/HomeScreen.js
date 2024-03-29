import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import EventCard from '../components/EventCard.js'; 
import FeatureButton from '../components/FeatureButton.js'; 
import NavigationBar from '../components/NavigationBar.js'; 
import WeekCalendar from '../components/WeeklyCalendar.js'; 

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
  eventScrollView: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20,
  },
  featureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -5,
    marginBottom: 10,
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
          <Image
            source={require("../assets/AcaciaWordmarkWhite.png")}
            style={{ height: 50, resizeMode: "contain" }}
          />
        </View>
        <Text style={styles.upcomingEventsHeader}>Upcoming Events</Text>

        {/* Horizontal scroll view of events */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventScrollView}
        >
          {events.map((event, index) => (
            <EventCard key={index} name={event.name} date={event.date} time={event.time} />
          ))}
        </ScrollView>

        <WeekCalendar />

        <View style={styles.featureButtonContainer}>
          <FeatureButton
            title="Coming Features"
            onPress={() => console.log("Coming Features Pressed")}
          />
          <FeatureButton
            title="Chapter Attendance"
            onPress={() => navigation.navigate("ChapterAttendance")} 
          />
        </View>
      </ScrollView>

      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
