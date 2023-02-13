import { describe, expect, test } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react-native'

import App from '../App'

describe('Testing App & Navigator', () => {
  test('screen show onboarding text', async () => {
    render(<App />)
    const conect = await screen.findByText('Conecta con el mundo')
    expect(conect).toBeOnTheScreen()
  });
  test('screen show welcome text', async () => {
    render(<App />);
    const skip = await screen.findByText('Skip')
    fireEvent.press(skip, 'press')
    const welcome = await screen.findByText('TUS PUNTOS')
    expect(welcome).toBeOnTheScreen()

  })
})