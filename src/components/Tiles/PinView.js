import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PinView = ({ pinVal, pinLength }) => {
  return (
    <View testID="pin-view" style={styles.inputContainer}>
      {Array(pinLength)
        .fill(0)
        .map((_, i) => (
          <View
            key={i}
            style={[
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
  );
};

const styles = StyleSheet.create({
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
});

export default PinView;
