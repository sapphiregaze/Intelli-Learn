import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerText}>IntelliLearn</Text>
      </View>

      {/* Contenu principal */}
      <ScrollView style={styles.content}>
        <View style={styles.shortCard}>
          <Text style={styles.cardTitle}>FlashCards Total : 23</Text>
          <Text style={styles.cardTitle}>Notes : 15</Text>
        </View>
        <Text style={styles.toDoListText}>To Do List</Text>
      </ScrollView>

      {/* Barre de navigation en bas */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home')}>
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Scan')}>
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Notes')}>
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Connect')}>
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', // Fond bleu ciel
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#B3E5FC', // Fond bleu ciel
  },
  headerText: {
    fontSize: 24, // Taille de police augmentée
    color: '#0D47A1', // Couleur de texte bleu foncé
    fontWeight: 'bold', // Police en gras
  },
  content: {
    flex: 1,
  },
  shortCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    width: '50%', // Largeur réduite
  },
  cardTitle: {
    fontSize: 18,
    color: '#0D47A1',
    marginBottom: 10,
  },
  toDoListText: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fond blanc
    height: 70, // Hauteur de la barre
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 30,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5, // Espace entre les boutons réduit
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
  },
  navTextDarkBlue: {
    color: '#0D47A1', // Couleur de texte bleu marine
  },
});
