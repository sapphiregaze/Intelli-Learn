import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SubjectButton = ({ circleColor, subject, percentage }) => (
  <View style={styles.subjectContainer}>
    <View style={[styles.circlebis, { backgroundColor: circleColor, justifyContent: 'center', alignItems: 'center' }]}>
      <Image
        source={require('./assets/math.png')}
        style={styles.circleImage}
      />
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

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/profile.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.mainHeaderText}>What will you learn today?</Text>
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search your course..." style={styles.searchBarInput} />
        </View>
        <ImageBackground source={require('./assets/gradient-button.png')} style={styles.gradientRectangle} resizeMode="stretch">
          <Text style={styles.topText}>RECENTLY ADDED</Text>
          <Text style={styles.mainText}>Multivariable Calculus and Differential Equations</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.roundedButton}>
              <Text style={styles.buttonText}>Start Practicing</Text>
              <TouchableOpacity style={styles.circle} onPress={() => console.log('Circle Clicked!')}>
                <Text style={styles.arrow}>&gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendedTitle}>Recommended for you</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subjectButtonsRow}>
          <SubjectButton circleColor="#DFF2FE" subject="Math" percentage="12.8" />
          <SubjectButton circleColor="#EAE6FF" subject="Math" percentage="12.8" />
        </View>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Data')}>
          <Image source={require('./assets/data.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FlashCards')}>
          <Image source={require('./assets/flashcards.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>FlashCards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Scan')}>
          <Image source={require('./assets/scan.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notes')}>
          <Image source={require('./assets/notes.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Connect')}>
          <Image source={require('./assets/connect.png')} style={styles.navIcon} />
          <Text style={[styles.navText, {fontSize: 12}]}>Connect</Text>
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
  headerIcon: {
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
  navBis: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2, 
    paddingTop: 40,
    bottom: 5,
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
  navTextDarkBlue: {
    color: '#5F7AF9', 
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
    backgroundColor: '#5F7AF9',
    marginBottom: 37,
  },  
  scanImage: {
    width: 40,
    height: 40,
  },

  square: {
    width: 160, 
    height: 130, 
    borderRadius: 17, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 10,               
  },

  infoAndProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },

  shortCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    width: '50%',  
    marginHorizontal: -10, 
    bottom: -30,
  },
  cardTitle: {
    fontSize: 14,
    color: '#0D47A1',
    marginBottom: 5,
  },

  mainHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5F7AF9', 
    paddingLeft: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 20,
    paddingHorizontal: 10,
  },

  searchBarInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 20, 
    fontSize: 16,
    color: '#000',
  },

  gradientRectangle: {
    width: '96%', 
    height: 130,  
    alignSelf: 'center', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 2,  
    borderRadius: 15,  
    overflow: 'hidden',  
    marginLeft: 10, 
  },
  topText: {
    color: '#9EC2FF',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: -30, 
    marginLeft: 20,
  },
  mainText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 5,  
    marginLeft: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 30,  
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subjectButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5, // Reduced margin to bring higher
    paddingHorizontal: 5,
  },
  subjectContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 5,
  },
  circlebis: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
  },
  subjectTextContainer: {
    flex: 1,
  },
  subjectLabel: {
    color: '#808080',
    fontSize: 10,
  },
  subjectName: {
    fontWeight: 'bold',
  },
  circleImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  percentageContainer: {
    backgroundColor: '#E3F8EA',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  percentageText: {
    color: '#59B879',
    fontWeight: 'bold',
    fontSize: 10,  // Reduced font size
  },
  seeAllText: {
    color: '#0000FF',
  },
  recommendedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 5,  // Adjusted to bring it higher
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },  
});