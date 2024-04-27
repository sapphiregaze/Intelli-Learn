import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Image
            source={require('./assets/menu.png')}  
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>IntelliLearn</Text>
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Image
            source={require('./assets/profile.png')}  
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <ScrollView style={styles.content}>
        {/* Container for FlashCards info and Progress Bar */}
        <View style={styles.infoAndProgressContainer}>
          <View style={styles.shortCard}>
            <Text style={styles.cardTitle}>FlashCards: 23</Text>
            <Text style={styles.cardTitle}>Notes: 15</Text>
          </View>
          {/* Progress Bar Area */}
          <View style={styles.progressBarContainer}>
            <Text style={styles.progressBarLabel}>Progress Bar</Text>
            <View style={styles.progressBarBackground}>
              <View style={styles.progressBar} />
            </View>
          </View>
        </View>

        <Text style={styles.toDoListText}>To Do List</Text>

        {/* View for white squares with spots */}
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Text style={styles.taskText}>• Review algebra formulas</Text>
            <Text style={styles.taskText}>• Write essay draft</Text>
            <Text style={styles.taskText}>• Prepare hackhaton </Text>
            <Text style={styles.taskText}>• Complete lab report</Text>
          </View>
          <View style={styles.square}>
            <Text style={styles.taskText}>• Study for CS exam</Text>
            <Text style={styles.taskText}>• Go to Turing lab</Text>
            <Text style={styles.taskText}>• Organize notes</Text>
            <Text style={styles.taskText}>• Research for science project</Text>
          </View>
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

          {/* Second line of days of the week */}
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

      {/* Navigation bar at the bottom with icons */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home')}>
          <Image source={require('./assets/home.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Flashcards')}>
          <Image source={require('./assets/flashcards.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Flashcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBis} onPress={() => console.log('Scan')}>
          {/* <Image source={require('./assets/scan.png')} style={styles.navIcon} /> */}
          <Text style={styles.navText}>Scan</Text>
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

      {/* Rounded square above the "Scan" button with an image */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#B3E5FC', 
    width: '100%',  
  },
  headerIcon: {
    width: 30,
    height: 30,
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
  navBis: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2, 
    paddingTop: 30,
  },
  navIcon: {
    width: 30, 
    height: 30, 
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5, 
    color: '#0D47A1',
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

  square: {
    width: 160, 
    height: 160, 
    borderRadius: 17, 
    backgroundColor: '#E3F2FD', 
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 10,               
  },
  taskText: {
    color: '#0D47A1',  
    fontSize: 14,       
    textAlign: 'left',         
    alignSelf: 'flex-start',   
    marginBottom: 5,
    width: '100%',             
  },

  infoAndProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  progressBarContainer: {
    justifyContent: 'center',
    marginLeft: -100,
  },
  progressBarLabel: {
    fontSize: 15,
    color: '#0D47A1',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  progressBarBackground: {
    width: 140,  
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '62%',  
    height: '100%',
    backgroundColor: '#0D47A1',
    borderRadius: 10,
  },

  shortCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    padding: 10,
    width: '50%',  
    marginHorizontal: -10,  
  },
  cardTitle: {
    fontSize: 14,
    color: '#0D47A1',
    marginBottom: 5,
  },
});