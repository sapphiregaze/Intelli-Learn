import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerTextDark}>Study for Tomorrow</Text>
          <Text style={styles.headerTextDark}>Flashcards: 12</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          {/* <Image source={require('./menu_icon.png')} style={styles.menuIcon} /> */}
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Logo and Flash icon */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/flash.png')} style={styles.flashIcon} />
          <Text style={styles.logoText}>IntelliLearn</Text>
        </View>
      </View>

      {/* Square Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.squareButton}>
          {/* <Image source={require('./scan_image.jpg')} style={styles.buttonImage} /> */}
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          {/* <Image source={require('./cards_image.jpg')} style={styles.buttonImage} /> */}
          <Text style={styles.buttonText}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          {/* <Image source={require('./chart_image.jpg')} style={styles.buttonImage} /> */}
          <Text style={styles.buttonText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          {/* <Image source={require('./connect_image.jpg')} style={styles.buttonImage} /> */}
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', //pastel sky blue background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  headerTextDark: {
    fontSize: 14,
    color: '#0D47A1', //dark blue
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#0D47A1', //dark blue
  },
  body: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flashIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1', //dark blue
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', //space between buttons
    marginBottom: 20,
  },
  squareButton: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#0D47A1',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
  },
});
