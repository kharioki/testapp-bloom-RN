import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import useStateWithCallback from 'use-state-with-callback';

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
        <TouchableOpacity
          key={index}
          style={styles.tile}
          onPress={() => {
            setPinVal('' + pinVal + number);
          }}
          disabled={isLoggingIn}>
          <Text style={styles.tileText}>{number}</Text>
        </TouchableOpacity>
      );
    });
  };

  let renderSingleCell = cell => {
    return (
      <View style={styles.singleTileRow}>
        <View style={styles.tile}>
          <Text style={styles.tileText}>{cell}</Text>
        </View>
      </View>
    );
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
  };

  return (
    <View style={styles.container}>
      {error && showToast(`Oops!!! ${error.error}`)}

      <Text style={styles.textTitle}>Please enter pin to login</Text>
      <Text style={styles.textTitle}>{pinVal}</Text>
      <View style={styles.inputContainer}>
        {Array(pinLength)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={[
              styles.cellView,
              {
                borderBottomColor: pinVal[i] ? '#ffffff' : '#000000',
              },
            ]}>
              <Text style={styles.cellText}>
                {pinVal && pinVal.length > 0 ? (pinVal[i] ? '*' : ' ') : ' '}
              </Text>
            </View>
          ))}
      </View>

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
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
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
  tile: {
    width: 60,
    height: 80,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#a2a2a2',
  },
  tileText: {
    fontSize: 24,
    color: '#797979',
  },
  singleTileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
