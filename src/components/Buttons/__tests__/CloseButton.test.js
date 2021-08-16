import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import CloseButton from '../CloseButton';

describe('CloseButton tests', () => {
  const onPress = jest.fn();

  it('should render a CloseButton component', () => {
    const { getByText } = render(
      <CloseButton
        text="logout"
        handleLogout={onPress}
        isLoggingOut={false}
        testID="close-button"
      />,
    );
    expect(getByText('logout')).toBeTruthy();
  });

  it('should call handleLogout when the button is pressed', () => {
    const { getByTestId } = render(
      <CloseButton
        text="logout"
        handleLogout={onPress}
        isLoggingOut={false}
        testID="close-button"
      />,
    );
    fireEvent.press(getByTestId('close-button'));
    expect(onPress).toHaveBeenCalled();
  });

  it('should be disabled when isLoggingOut is true', () => {
    const { getByText } = render(
      <CloseButton
        text="logout"
        handleLogout={onPress}
        isLoggingOut={true}
        testID="close-button"
      />,
    );
    const button = getByText('logout');
    expect(button).toBeDisabled();
  });
});
