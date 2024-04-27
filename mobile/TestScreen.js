import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <View style={styles.profile}>
          {/* Ici, vous pouvez ajouter une image de profil */}
        </View>
        <View style={styles.toDoList}>
          <View style={styles.toDoListSquare}></View>
          <View style={styles.toDoListSquare}></View>
        </View>
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
          <Text style={[styles.navText, styles.navTextBlue]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Text style={[styles.navText, styles.navTextBlue]}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemCenter} onPress={() => console.log('Scan')}>
          <View style={styles.scanButton}>
            <Text style={[styles.navText, styles.navTextWhite]}>Scan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Notes')}>
          <Text style={[styles.navText, styles.navTextBlue]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Connect')}>
          <Text style={[styles.navText, styles.navTextBlue]}>Connect</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#B3E5FC', // Fond bleu ciel
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0D47A1', // Couleur bleu foncé
  },
  toDoList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toDoListSquare: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#0D47A1', // Couleur bleu foncé
    marginHorizontal: 5,
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
  },
  navItemCenter: {
    alignItems: 'center',
    flex: 1,
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#B3E5FC', // Fond bleu ciel
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
    transform: [{ translateY: -5 }], // Fait sortir le bouton vers le haut
  },
  navText: {
    fontSize: 12,
  },
  navTextBlue: {
    color: '#B3E5FC', // Couleur de texte bleu ciel
  },
  navTextWhite: {
    color: '#FFFFFF', // Couleur de texte blanc
  },
});
