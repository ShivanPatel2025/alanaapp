import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

const EventCard = ({ name, date, time }) => (
  <View style={styles.eventCard}>
    <Text style={styles.eventTitle}>{name}</Text>
    <Text style={styles.eventTime}>{`${date} | ${time}`}</Text>
  </View>
);

export default EventCard;
