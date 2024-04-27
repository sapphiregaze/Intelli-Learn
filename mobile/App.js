import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from './AuthenticationScreen';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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
        <ActivityIndicator size="large" color="#0D47A1" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
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
    color: '#0D47A1',
  },
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
});
