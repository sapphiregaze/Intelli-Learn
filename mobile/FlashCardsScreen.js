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

        {/* White Rectangle */}
        <View style={styles.headerRectangle}>
          <Text style={styles.headerRectangleText}>Create your best favorite Flashcards Playlist all the time !</Text>
          <Image
            source={require('./assets/music.jpg')}
            style={styles.musicImage}
            resizeMode="contain" 
          />
        </View>
        <View style={styles.purpleRectangle}></View>
      </View>

      <View style={styles.flashcardContainer}>
        <View style={styles.flashcard}>
          <Text style={styles.flashcardText}>FlashCard 1</Text>
        </View>
        <View style={styles.flashcard}>
          <Text style={styles.flashcardText}>FlashCard 2</Text>
        </View>
      </View>

          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButtonBlue}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButtonPurple}>
          <Text style={styles.buttonText}>Camera Screen</Text>
        </TouchableOpacity>
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
  headerRectangle: {
    position: 'absolute',
    bottom: -190,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    height: 170,
    borderRadius: 18,
    justifyContent: 'flex-start', 
    alignItems: 'center',     
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
    paddingTop: 18, 
    paddingHorizontal: 20,
  },
  headerRectangleText: {
    color: '#C46CFF',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'left', 
  },
  musicImage: {
    width: 330, 
    height: 100, 
    marginTop: 0, 
    alignSelf: 'center' 
  },
  purpleRectangle: {
    position: 'absolute',
    bottom: -200, 
    left: 20,
    right: 20,
    backgroundColor: '#C46CFF',
    height: 180,
    borderRadius: 18,
    transform: [{ rotate: '6deg' }], 
    zIndex: -1, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'left', 
    marginTop: -230,
    marginLeft: 30, 
  },
  roundedButtonBlue: {
    backgroundColor: '#597DFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10, 
  },
  roundedButtonPurple: {
    backgroundColor: '#C46CFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flashcardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 300, 
    paddingHorizontal: 25,
  },
  flashcard: {
    width: 150, 
    height: 150, 
    backgroundColor: 'white',
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  flashcardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#597DFF', 
  }, 
});