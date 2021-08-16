import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutBtnText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logoutButton: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#424242',
  },
  logoutBtnText: {
    padding: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
