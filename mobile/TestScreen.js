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
          <Text style={styles.cardTitle}>FlashCards : 23</Text>
          <Text style={styles.cardTitle}>Notes : 15</Text>
        </View>
        <Text style={styles.toDoListText}>To Do List</Text>
      </ScrollView>

      {/* Carré arrondi au-dessus du bouton "Scan" */}
      <View style={styles.scanButton}></View>

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
    padding: 10, // Réduction du padding
    marginHorizontal: 20,
    marginTop: 20,
    width: '40%', // Largeur réduite
  },
  cardTitle: {
    fontSize: 14, // Réduction de la taille de la police
    color: '#0D47A1',
    marginBottom: 5, // Espacement réduit
  },
  toDoListText: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Alignement à gauche
    marginLeft: 20, // Marge à gauche
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
  scanButton: {
    position: 'absolute',
    top: -40, // Décalage vers le haut
    alignSelf: 'center', // Centrage horizontal
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#0D47A1', // Fond bleu marine
  },
});
