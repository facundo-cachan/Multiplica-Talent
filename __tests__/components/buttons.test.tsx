import { describe, expect, test } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react-native'

import { Buttons } from '@components'

// @ts-ignore
const onPressMock = jest.fn();

describe('Testing Buttons', () => {
  test('Button Simple', () => {
    const eventData = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };
    render(
      <Buttons.Simple
        onPress={onPressMock}
        title="Press me"
        disabled={false}
        loading={true}
        color="primary"
        contentStyle={{
          backgroundColor: '#c44c',
          color: 'primary',
          textAlign: 'center',
        }}
        size="bigger"
      />,
    );
    fireEvent.press(screen.getByText('Press me'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
