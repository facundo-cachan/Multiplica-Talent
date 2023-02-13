import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react-native'

import { Cards } from '@components'

// @ts-ignore
const onPressMock = jest.fn();

describe('Testing Cards', () => {
  test('Card BorderRounded', async() => {
    render(
      <Cards.BorderRounded
        title="Title"
        subTitle="SubTitle"
      />
    );
    const title = await screen.findByText('Title');
    const subTitle = await screen.findByText('SubTitle');
    expect(title).toBeOnTheScreen();
    expect(subTitle).toBeOnTheScreen();
  });
});
