import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const images = {
  math: require('./assets/math.png'),
  bookbis: require('./assets/bookbis.png')
};

const subjects = [
  { name: "Math", notes: 25, color: "#DBEAFE", image: 'math' },
  { name: "Science", notes: 25, color: "#DBEAFE", image: 'math' },
  { name: "Socials", notes: 25, color: "#DBEAFE", image: 'math' },
  { name: "English", notes: 17, color: "#C3B5F1", image: 'bookbis' },
  { name: "Physics", notes: 17, color: "#C3B5F1", image: 'bookbis' },
  { name: "French", notes: 17, color: "#C3B5F1", image: 'bookbis' }
];

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
        {/* Button "bell" */}
        <TouchableOpacity onPress={() => console.log('Bell button pressed')}>
          <Image source={require('./assets/bell.png')} style={styles.headerIconBell} />
        </TouchableOpacity>
        {/* Button "fire" */}
        <TouchableOpacity onPress={() => console.log('Fire button pressed')}>
          <Image source={require('./assets/fire.png')} style={styles.headerIconFire} />
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/profile.png')} style={styles.headerIconProfile} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search your notes..."
        placeholderTextColor="#A0A0A0"
      />   
      {/* Custom button with icon, text and circle */}
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
        {/* Buttons "storage" et "file" */}
        <View style={styles.imageButtonsContainer}>
      <TouchableOpacity style={[styles.imageButtonIcon, {position: 'absolute', right: 75, top: -40}]} onPress={() => console.log('Storage button pressed')}>
        <Image source={require('./assets/storage.png')} style={styles.imageButtonIcon} />
      </TouchableOpacity>

      <View style={styles.foldersTextContainer}>
          <Text style={styles.foldersText}>Folders</Text>
        </View>

        <View style={styles.subjectsContainer}>
          {subjects.map((subject, index) => (
            <View key={index} style={[styles.subjectBox, {backgroundColor: '#FFF'}, index % 2 === 0 ? styles.leftColumn : styles.rightColumn]}>
              <View style={[styles.circle, {backgroundColor: subject.color}]}>
                <Image source={images[subject.image]} style={styles.circleImage} />
              </View>
              <View>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <Text style={styles.notesText}>{`${subject.notes} notes`}</Text>
              </View>
            </View>
          ))}
        </View>

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
  foldersTextContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  foldersText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    padding: 20,
  },
  subjectBox: {
    width: '45%', 
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5, 
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notesText: {
    fontSize: 14,
    color: '#666',
  },
  leftColumn: {
    marginRight: 2,
  },
  rightColumn: {
    marginLeft: 2, 
  },
});