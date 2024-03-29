import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  featureButton: {
    backgroundColor: '#DAA520',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const FeatureButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.featureButton} onPress={onPress}>
    <Text style={styles.featureButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default FeatureButton;
