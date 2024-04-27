import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

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

        {/* Vue pour les carrés blancs */}
        <View style={styles.squareContainer}>
            <View style={styles.square}></View>
            <View style={styles.square}></View>
        </View>

        <View style={styles.transparentRectangle}></View>

        <View style={styles.transparentRectangle}>
          <View style={styles.dayCircles}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <View key={index} style={styles.circle}>
                <Text style={styles.dayNumber}>{index + 1}</Text>
                <Text style={styles.dayName}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Deuxième ligne de jours de la semaine */}
          <View style={styles.dayCircles}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <View key={index} style={styles.circle}>
                <Text style={styles.dayNumber}>{index + 8}</Text>
                <Text style={styles.dayName}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* Barre de navigation en bas avec des icônes */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home')}>
          <Image source={require('./assets/home.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Image source={require('./assets/flashcards.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Scan')}>
          <Image source={require('./assets/scan.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Notes')}>
          <Image source={require('./assets/notes.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Connect')}>
          <Image source={require('./assets/connect.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* Carré arrondi au-dessus du bouton "Scan" avec une image */}
      <TouchableOpacity style={styles.scanButton} onPress={() => console.log('Scan pressed')}>
        <Image source={require('./assets/scan.png')} style={styles.scanImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', 
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#B3E5FC', 
  },

  transparentRectangle: {
    position: 'absolute',
    bottom: -170,
    alignSelf: 'center',
    width: '90%',
    height: 140, 
    borderRadius: 17, 
    backgroundColor: '#0D47A1', 
    zIndex: -1, 
  },

  headerText: {
    fontSize: 24, 
    color: '#0D47A1', 
    fontWeight: 'bold', 
  },
  content: {
    flex: 1,
  },
  shortCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    padding: 10, 
    marginHorizontal: 20,
    marginTop: 20,
    width: '40%', 
  },
  cardTitle: {
    fontSize: 14, 
    color: '#0D47A1',
    marginBottom: 5, 
  },
  toDoListText: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
    alignSelf: 'flex-start', 
    marginLeft: 20, 
    marginTop: 20,
  },

  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20, 
  },
  square: {
    width: 160, 
    height: 160, 
    borderRadius: 17, 
    backgroundColor: '#E3F2FD', 
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    height: 80, 
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
    marginHorizontal: 2, 
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10, 
  },
  navIcon: {
    width: 30, 
    height: 30, 
  },
  navTextDarkBlue: {
    color: '#0D47A1', 
  },
  scanButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center', 
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#0D47A1',
    marginBottom: 37,
  },  
  scanImage: {
    width: 40,
    height: 40,
  },

  dayCircles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circle: {
    alignItems: 'center',
  },
  dayNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayName: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
