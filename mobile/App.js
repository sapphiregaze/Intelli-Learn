import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker'; 

export default function App() {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image captured successfully:', response.uri);
      }
    });
  };

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
          <Image source={require('./assets/menu.png')} style={styles.menuIcon} />
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

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.squareButton} onPress={openCamera}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <Text style={styles.buttonText}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <Text style={styles.buttonText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', 
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
    marginTop: 10, 
  },
  headerTextDark: {
    fontSize: 14,
    color: '#0D47A1', 
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#0D47A1', 
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
    color: '#0D47A1', 
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
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