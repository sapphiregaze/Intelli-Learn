import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function ProfileScreen() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F6FA' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon
                    color="#fff"
                    name="edit-3"
                    size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <Text style={styles.profileName}>Username</Text>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            {[
              { icon: 'globe', label: 'Language', backgroundColor: '#5F7AF9' },
              { icon: 'moon', label: 'Dark Mode', backgroundColor: '#5F7AF9', switch: true, value: form.darkMode, setter: (value) => setForm({ ...form, darkMode: value }) },
              { icon: 'navigation', label: 'Location', backgroundColor: '#5F7AF9' },
              { icon: 'at-sign', label: 'Email Notifications', backgroundColor: '#5F7AF9', switch: true, value: form.emailNotifications, setter: (value) => setForm({ ...form, emailNotifications: value }) },
              { icon: 'bell', label: 'Push Notifications', backgroundColor: '#5F7AF9', switch: true, value: form.pushNotifications, setter: (value) => setForm({ ...form, pushNotifications: value }) },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: item.backgroundColor }]}>
                  <FeatherIcon color="#fff" name={item.icon} size={20} />
                </View>

                <Text style={styles.rowLabel}>{item.label}</Text>

                <View style={styles.rowSpacer} />
                {item.switch ? (
                  <Switch
                    onValueChange={item.setter}
                    value={item.value} />
                ) : (
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>
            {[
              { icon: 'flag', label: 'Report Bug', backgroundColor: '#8e8d91' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: item.backgroundColor }]}>
                  <FeatherIcon color="#fff" name={item.icon} size={20} />
                </View>

                <Text style={styles.rowLabel}>{item.label}</Text>

                <View style={styles.rowSpacer} />

                <FeatherIcon
                  color="#C6C6C6"
                  name="chevron-right"
                  size={20} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FA',
  },
  profile: {
    padding: 24,
    backgroundColor: '#F3F6FA',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F6FA',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#5F7AF9',
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#414d63',
  },
  profileAddress: {
    fontSize: 16,
    color: '#989898',
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5F7AF9',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#414d63',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
  },
});