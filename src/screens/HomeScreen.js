import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

export default function HomeScreen({ navigation }) {
  const { logout, logoutMessage, token, tokenError, isLoggingOut } =
    useContext(AuthContext);

  const handleLogout = () => {
    logout(token);
    navigation.navigate('Login');
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
  };

  return (
    <View style={styles.container}>
      {tokenError && showToast(`Oops!!! ${tokenError.error}`)}
      {logoutMessage && showToast(logoutMessage)}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        disabled={isLoggingOut}>
        <Text style={styles.logoutBtnText}>LOGOUT</Text>
      </TouchableOpacity>

      {isLoggingOut && <ActivityIndicator size="large" color="#414141" />}
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
