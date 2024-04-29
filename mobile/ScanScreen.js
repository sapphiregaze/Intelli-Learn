import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Scan Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanScreen;