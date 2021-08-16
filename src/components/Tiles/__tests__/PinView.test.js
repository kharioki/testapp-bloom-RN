import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import PinView from '../PinView';

describe('PinView component tests', () => {
  it('should render PinView component', () => {
    const { getByTestId, debug } = render(
      <PinView pinVal={'123'} pinLength={4} testID="pin-view" />,
    );
    debug();
    const wrapper = getByTestId('pin-view');
    expect(wrapper).toBeTruthy();
  });
});
