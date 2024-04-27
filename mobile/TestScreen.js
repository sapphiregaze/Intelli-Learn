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
          <Text style={[styles.navText, styles.navTextBlue]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Text style={[styles.navText, styles.navTextBlue]}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Scan')}>
          <View style={[styles.navItemCenter, styles.scanButton]}>
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
  logo: {
    fontSize: 24,
    color: '#0D47A1',
    fontWeight: 'bold',
  },
  profileButton: {
    // Ici, vous pouvez ajouter un style pour améliorer l'apparence du bouton profil
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
    backgroundColor: '#FFFFFF', // Fond blanc
    height: 70, // Augmentation de la hauteur de la barre
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
    transform: [{ translateY: -15 }], // Fait sortir le bouton vers le haut
  },
  scanButton: {
    backgroundColor: '#B3E5FC', // Fond bleu ciel
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
