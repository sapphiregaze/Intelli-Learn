import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from './AuthenticationScreen';
import CreateAccountScreen from './CreateAccountScreen';
import TestScreen from './TestScreen';
import ScanScreen from './ScanScreen'; 
import NotesScreen from './NotesScreen';
import ConnectScreen from './ConnectScreen';
import FlashCardsScreen from './FlashCardsScreen';
import DataScreen from './DataScreen'; 
import ProfileScreen from './ProfileScreen';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createNativeStackNavigator();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/flash.png')} style={styles.flashIcon} />
          <Text style={styles.logoText}>IntelliLearn</Text>
        </View>
        <ActivityIndicator size="large" color="#5F7AF9" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="FlashCards" component={FlashCardsScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flashIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5F7AF9',
  },
  container: {
    flex: 1,
    backgroundColor: '#5F7AF9',
  },
});