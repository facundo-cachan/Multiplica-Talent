import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react-native'

import { Texts } from '@components'

describe('Testing Texts', () => {
  test('Text Default', async () => {
    const textTest = "Title"
    render(
      <Texts.Default
        text={textTest}
        color="primary"
      />
    );
    const text = await screen.findByText(textTest);
    expect(text).toBeOnTheScreen();
  });
});
