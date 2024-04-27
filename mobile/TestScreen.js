import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vous êtes sur la page de test!</Text>
      <Button title="Retour à l'authentification" onPress={() => navigation.navigate('Authentication')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
  },
  text: {
    fontSize: 22,
    color: '#0D47A1',
    marginBottom: 20,
  },
});
