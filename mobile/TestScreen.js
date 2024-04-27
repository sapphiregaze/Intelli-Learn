import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.logo}>IntelliLearn</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profil')}>
          <Text style={styles.profileText}>Profil</Text>
        </TouchableOpacity>
      </View>

      {/* Contenu principal */}
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>To Do List</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Flashcards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profil</Text>
        </View>
      </ScrollView>

      {/* Barre de navigation en bas */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Text style={styles.navText}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemCenter]} onPress={() => console.log('Scan')}>
          <Text style={styles.navText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Connect')}>
          <Text style={styles.navText}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Notes')}>
          <Text style={styles.navText}>Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#B3E5FC',
  },
  logo: {
    fontSize: 24,
    color: '#0D47A1',
    fontWeight: 'bold',
  },
  profileButton: {
    
  },
  profileText: {
    fontSize: 18,
    color: '#0D47A1',
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: '#0D47A1',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 30,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navItemCenter: {
    backgroundColor: '#0D47A1',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
  },
  navText: {
    color: '#0D47A1',
    fontSize: 12,
  },
});
