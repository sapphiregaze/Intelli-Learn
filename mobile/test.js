import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import item1Image from './assets/item1.png';
import item2Image from './assets/item2.png';
import item3Image from './assets/item3.png';

const items = [
  { key: 'item1', title: 'Learning Progress', hours: '12.00 hours', image: item1Image },
  { key: 'item2', title: 'Daily Average Study Time', hours: '3.00 hours', image: item2Image },
  { key: 'item3', title: 'Completed Educational Goals', hours: '15.00 hours', image: item3Image }
];

export default function DataScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>This Week</Text>
      <TouchableOpacity style={styles.button}>
        <View style={styles.analysisContainer}>
          <Text style={styles.buttonText}>Study time analysis</Text>
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
      <Text style={styles.performanceHeader}>My Performance</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.performanceButton}>
          <View style={styles.iconContainer}>
            <Image source={item.image} style={styles.icon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            <Text style={styles.infoHours}>{item.hours}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#F3F6FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5F7AF9',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    marginTop: 5,
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
  performanceHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
    marginLeft: -190,    
  },
  performanceButton: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5F7AF9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    marginLeft: 20,
  },
  infoTitle: {
    fontSize: 16,
    color: '#000',
  },
  infoHours: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});