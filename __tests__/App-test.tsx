import { describe, expect, test } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react-native'

import App from '../App'

describe('Testing react navigation', () => {
  test('screen show welcome text', async () => {
    render(<App />)
    const conect = await screen.findByText('Conecta con el mundo')
    expect(conect).toBeOnTheScreen()
  })
  /* test('screen show welcome text', async () => {
    const component = (
      <NavigationContainer>
        <AppStackNavigator routeByRole={[]} />
      </NavigationContainer>
    )
    render(component)
    const conect = await screen.findByText('Conecta con el mundo')
    expect(conect).toBeOnTheScreen()
  }) */

  test('screen show welcome text', async () => {
    render(<App />);
    const skiped = await screen.findByText('Skip')
    fireEvent(skiped, 'press')
    const welcome = await screen.findByText('Bienvenido')
    expect(welcome).toBeOnTheScreen()
  })
})