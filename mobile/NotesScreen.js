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

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search your notes..."
        placeholderTextColor="#A0A0A0"
      />   
      {/* Bouton personnalisé avec icône, texte et cercle */}
      <TouchableOpacity style={styles.customButton} onPress={() => console.log('Button pressed')}>
        <Image
          source={require('./assets/squares.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>All</Text>
        <View style={styles.buttonCircle}>
          <Image
            source={require('./assets/arrowdown.png')}
            style={styles.circleImage}
          />
        </View>
      </TouchableOpacity>
        {/* Conteneur pour les boutons "storage" et "file" */}
        <View style={styles.imageButtonsContainer}>
      {/* Bouton pour 'storage' positionné absolument */}
      <TouchableOpacity style={[styles.imageButtonIcon, {position: 'absolute', right: 75, top: -40}]} onPress={() => console.log('Storage button pressed')}>
        <Image source={require('./assets/storage.png')} style={styles.imageButtonIcon} />
      </TouchableOpacity>

      {/* Bouton pour 'file' positionné absolument */}
      <TouchableOpacity style={[styles.imageButtonIcon, {position: 'absolute', right: 35, top: -38}]} onPress={() => console.log('File button pressed')}>
        <Image source={require('./assets/file.png')} style={styles.imageButtonIcon} />
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
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
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
  searchBar: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    fontSize: 16,
  },
  customButton: {
    flexDirection: 'row',
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 20,
    width: 125,  
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#5F7AF9',
    fontWeight: 'bold',
  },
  buttonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#BFDBFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,  
  },
  circleImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#5F7AF9',
    fontWeight: 'bold',
  },
  imageButtonsContainer: {
    flexDirection: 'row',
  },
  imageButtonIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  }, 
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});