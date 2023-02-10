import { faList } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'

import { AppContext } from '@providers/providerContext'
import DarkTheme from '@styles/dark'
import LightTheme from '@styles/light'
import { colors, fonts, fontsSizes } from '@styles/theme'

// import AppTabNavigator from '@navigation/AppTabNavigator';
import AppStackNavigator from '@navigation/AppStackNavigator'

import type { IconProps } from '../components/icons'

export type Route = {
  name: 'Product' // should be keyof RootStackParamList
  icon: IconProps['name']
}
const routes: Route[] = [
  {
    icon: faList,
    name: 'Product',
  },
]

const AppNavigation = () => {
  const { dark } = useContext(AppContext)
  const [theme, setTheme] = useState({
    colors,
    fonts,
    fontsSizes,
    ...LightTheme,
  })

  useEffect(() => {
    console.log(`🎨 Changing theme to ${dark ? 'dark' : 'light'}`)
    setTheme({ colors, fonts, fontsSizes, ...(dark ? DarkTheme : LightTheme) })
  }, [dark])

  return (
    <NavigationContainer theme={theme}>
      <AppStackNavigator routeByRole={routes} />
    </NavigationContainer>
  )
}

export default AppNavigation