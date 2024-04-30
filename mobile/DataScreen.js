import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DataScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Analysis</Text>
      <Text style={styles.subHeader}>This Week</Text>
      <TouchableOpacity style={styles.button}>
        <View style={styles.analysisContainer}>
          <Text style={styles.buttonText}>study time analysis</Text>
          <Text style={styles.hours}>00.00 hours</Text>
        </View>
        <View style={styles.barContainer}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <View key={index} style={styles.dayBar}>
              <View style={styles.innerBar} />
            </View>
          ))}
        </View>
        <View style={styles.dayLabels}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <Text key={index} style={styles.dayText}>{day}</Text>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#F3F6FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5F7AF9',
    marginBottom: 14,
  },
  subHeader: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#000',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  analysisContainer: {
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  hours: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayBar: {
    width: 20,
    height: 100,
    backgroundColor: '#E0E0E0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
  },
  innerBar: {
    width: 20,
    height: 50, 
    backgroundColor: '#5F7AF9',
    borderRadius: 5,
  },
  dayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },
  dayText: {
    fontSize: 12,
    color: '#000',
  },
});