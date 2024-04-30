import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlashCardsScreen() {
  return (
    <View style={styles.container}>
      <Text>FlashCards Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  }
});