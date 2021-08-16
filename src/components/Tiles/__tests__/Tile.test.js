import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import Tile from '../Tile';

describe('Tile component tests', () => {
  const onPress = jest.fn();

  it('should render some number on the tile', () => {
    const { getByText } = render(
      <Tile number={1} isLoggingIn={false} onPress={onPress} testID="tile" />,
    );
    expect(getByText('1')).toBeTruthy();
  });

  it('should call onPress function when the tile is pressed', () => {
    const { getByTestId } = render(
      <Tile number={2} isLoggingIn={false} onPress={onPress} testID="tile" />,
    );
    fireEvent.press(getByTestId('tile'));
    expect(onPress).toHaveBeenCalled();
  });

  it('should be disabled when isLoggingIn is true', () => {
    const { getByText } = render(
      <Tile number={3} isLoggingIn={true} onPress={onPress} testID="tile" />,
    );
    const button = getByText('3');
    expect(button).toBeDisabled();
  });
});
