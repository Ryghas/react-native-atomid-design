import {fireEvent, render, screen} from '@testing-library/react-native';

import {BaseButton} from '.';

describe('<BaseButton />', () => {
  it('should render correctly', () => {
    const handlePress = jest.fn();
    render(
      <BaseButton testID="base-button" onPress={handlePress}></BaseButton>,
    );

    fireEvent.press(screen.getByTestId('base-button'));
    expect(handlePress).toHaveBeenCalled();
  });
});
