import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AuthenticationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Test')} />
        <Button title="Create Account" onPress={() => navigation.navigate('CreateAccount')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC', // Assuming this is the background color
  },
  title: {
    fontSize: 24,
    color: '#0D47A1', // Matching the text color
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
