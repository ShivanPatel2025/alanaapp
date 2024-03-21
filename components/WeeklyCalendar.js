import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const styles = StyleSheet.create({
  calendarContainer: {
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  eventItem: {
    backgroundColor: '#DAA520', // Old Gold color
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  eventText: {
    color: 'black',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const events = [
  { name: "Aphi Exchange", date: "2023-03-20", time: "8PM-12AM" },
  { name: "Find The Forty", date: "2023-03-22", time: "9PM-11PM" },
  { name: "Dayger", date: "2023-03-23", time: "1PM-4PM" },
];

const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredEvents = events.filter(event => event.date === selectedDate);

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setModalVisible(true);
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <View key={index} style={styles.eventItem}>
                    <Text style={styles.eventText}>{event.name}</Text>
                    <Text style={styles.eventText}>{event.time}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.eventText}>No events for this day.</Text>
              )}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WeekCalendar;
