import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CloseButton = ({ text, handleLogout, isLoggingOut }) => {
  return (
    <TouchableOpacity
      testID="close-button"
      style={styles.logoutButton}
      onPress={handleLogout}
      disabled={isLoggingOut}>
      <Text style={styles.logoutBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CloseButton;
