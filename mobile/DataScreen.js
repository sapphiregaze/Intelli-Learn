import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SubjectButton = ({ circleColor, subject, percentage }) => (
  <View style={styles.subjectContainer}>
    <View style={[styles.circlebis, { backgroundColor: circleColor, justifyContent: 'center', alignItems: 'center' }]}>
      <Image source={require('./assets/math.png')} style={styles.circleImage} />
    </View>
    <View style={styles.subjectTextContainer}>
      <Text style={styles.subjectLabel}>Best subject</Text>
      <Text style={styles.subjectName}>{subject}</Text>
    </View>
    <View style={styles.percentageContainer}>
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  </View>
);

export default function TestScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Bouton "bell" */}
        <TouchableOpacity onPress={() => console.log('Bell button pressed')}>
          <Image source={require('./assets/bell.png')} style={styles.headerIconBell} />
        </TouchableOpacity>
        {/* Bouton "fire" */}
        <TouchableOpacity onPress={() => console.log('Fire button pressed')}>
          <Image source={require('./assets/fire.png')} style={styles.headerIconFire} />
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/profile.png')} style={styles.headerIconProfile} />
        </TouchableOpacity>
      </View>
      <View style={styles.weekContainer}>
        <Text style={styles.weekText}>This Week</Text>
      </View>

      {/* Rectangle blanc avec les informations */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Study time analysis</Text>
        <Text style={styles.infoTime}>25.08 hours</Text>
        {/* Barres de progression et jours de la semaine */}
        <View style={styles.barContainer}>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <View key={index} style={styles.bar}>
              {/* Barre grise */}
              <View style={styles.grayBar}></View>
              {/* Barre bleue (progression) */}
              <View style={styles.blueRectangle}></View>
              {/* Étiquette du jour de la semaine */}
              <Text style={styles.dayLabel}>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index - 1]}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.performanceContainer}>
        <Text style={styles.performanceTitle}>My Performance</Text>
        {/* Première boîte de performance */}
        <View style={styles.performanceBox}></View>
        {/* Deuxième boîte de performance */}
        <View style={styles.performanceBox}></View>
        {/* Troisième boîte de performance */}
        <View style={styles.performanceBox}></View>
      </View>

      <View style={styles.content}>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Test')}>
          <Image source={require('./assets/home.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FlashCards')}>
          <Image source={require('./assets/flashcards.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>FlashCards</Text>
        </TouchableOpacity>
        {/* Protruding Scan button */}
        <TouchableOpacity style={styles.scanButtonProtruding} onPress={() => navigation.navigate('Scan')}>
          <Image source={require('./assets/scan.png')} style={styles.scanIconCentered} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notes')}>
          <Image source={require('./assets/notes.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Data')}>
          <Image source={require('./assets/data.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F3F6FA', 
    width: '100%',  
  },
  headerIconBell: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  headerIconFire: {
    width: 25,
    height: 25,
    marginRight: 240,
  },
  headerIconProfile: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 24, 
    color: '#0D47A1', 
    fontWeight: 'bold', 
    alignItems: 'center',
  },
  content: {
    flex: 1,
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
  navIcon: {
    width: 30, 
    height: 30, 
  },
  navText: {
    textAlign: 'center',
    marginTop: 5, 
    color: '#5F7AF9',
  },
  scanButtonProtruding: {
    alignItems: 'center',      
    justifyContent: 'center',   
    width: 65,                  
    height: 65,                 
    borderRadius: 12,           
    backgroundColor: '#5F7AF9', 
    elevation: 10,              
    zIndex: 1,                 
    marginTop: -70,             
    marginLeft: 20,            
    marginRight: 20,            
  },
  scanIconCentered: {
    width: 40,                  
    height: 40,                 
    resizeMode: 'contain'     
  },
  infoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  infoTime: {
    fontSize: 14,
    color: '#000',
  },
  weekContainer: {
    marginLeft: 25,
    marginTop: -10,
  },
  weekText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F7AF9',
    marginBottom: 9,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bar: {
    alignItems: 'center',
  },
  grayBar: {
    backgroundColor: '#D3D3D3',
    width: 20, 
    height: 100, 
    borderRadius: 5,
  },
  blueRectangle: {
    backgroundColor: '#5F7AF9',
    width: 20, 
    height: 40,  
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
  },
  dayLabel: {
    marginTop: 20, 
    fontSize: 12,
    color: '#000',
  },
  performanceContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  performanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  performanceBox: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    height: 50,
    elevation: 5,
    marginBottom: 10,
  },
});