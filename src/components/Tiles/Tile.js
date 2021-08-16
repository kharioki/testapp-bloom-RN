import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tile = ({ number, isLoggingIn, onPress }) => {
  return (
    <TouchableOpacity
      testID="tile"
      style={styles.tile}
      onPress={onPress}
      disabled={isLoggingIn}>
      <Text style={styles.tileText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Tile;
