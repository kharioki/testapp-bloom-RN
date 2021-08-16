import React, { useContext } from 'react';
import { View, StyleSheet, ToastAndroid, ActivityIndicator } from 'react-native';
import useStateWithCallback from 'use-state-with-callback';

import PinView from '../components/Tiles/PinView';
import Tile from '../components/Tiles/Tile';

import { AuthContext } from '../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
  let pinLength = 4;

  const { login, token, error, isLoggingIn } = useContext(AuthContext);

  const [pinVal, setPinVal] = useStateWithCallback('', code => {
    if (code.length === pinLength) {
      handleLogin(code);
    }
  });

  const handleLogin = code => {
    login(code);
    if (token) {
      navigation.navigate('Home');
      setPinVal('');
    }
  };

  let renderRowCells = cellsArray => {
    return cellsArray.map((number, index) => {
      return (
        <Tile
          key={index}
          number={number}
          onPress={() => setPinVal('' + pinVal + number)}
          isLoggingIn={isLoggingIn}
        />
      );
    });
  };

  let renderSingleCell = number => (
    <Tile
      number={number}
      onPress={() => setPinVal('' + pinVal + number)}
      isLoggingIn={isLoggingIn}
    />
  );

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
  };

  return (
    <View style={styles.container}>
      {error && showToast(`Oops!!! ${error.error}`)}

      <PinView pinLength={pinLength} pinVal={pinVal} />

      <View style={styles.keypadContainer}>
        <View style={styles.row}>{renderRowCells([1, 2, 3])}</View>
        <View style={styles.row}>{renderRowCells([4, 5, 6])}</View>
        <View style={styles.row}>{renderRowCells([7, 8, 9])}</View>
        <View>{renderSingleCell(0)}</View>
        {isLoggingIn && <ActivityIndicator size="large" color="#414141" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keypadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
