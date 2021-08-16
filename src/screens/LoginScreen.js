import React, { useState, useRef, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
  const { login, token, error } = useContext(AuthContext);

  console.log(token);
  console.log(error);

  let pinLength = 4;

  const [pinVal, setPinVal] = useState('');

  let renderRowCells = cellsArray => {
    return cellsArray.map((number, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.tile}
          onPress={() => addPin(number)}>
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

  console.log(pinVal);

  const addPin = num => {
    if (pinVal.length === pinLength) {
      handleLogin(pinVal);
    } else if (pinVal.length !== pinLength) {
      const val = '' + pinVal + num;
      setPinVal(val);
    }
  };

  const handleLogin = async () => {
    await login(pinVal);
    if (token) {
      navigation.navigate('Home', { pin });
    }
    setPinVal('');
  };

  const showToast = message => {
    ToastAndroid.show(
      `Error!!!  ${message}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      {error && showToast(error.error)}

      <Text style={styles.textTitle}>Please enter pin to login</Text>
      <Text style={styles.textTitle}>{pinVal}</Text>
      <View style={styles.inputContainer}>
        {Array(pinLength)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={styles.cellView}>
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
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
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
    width: 70,
    height: 90,
    borderRadius: 4,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#a2a2a2',
  },
  tileText: {
    fontSize: 30,
    color: '#797979',
  },
  singleTileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
