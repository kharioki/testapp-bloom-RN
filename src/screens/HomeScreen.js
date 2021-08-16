import React, { useContext } from 'react';
import { View, StyleSheet, ToastAndroid, ActivityIndicator } from 'react-native';
import CloseButton from '../components/Buttons/CloseButton';

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

      <CloseButton
        text="LOGOUT"
        handleLogout={handleLogout}
        isLoggingOut={isLoggingOut}
      />

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
});
