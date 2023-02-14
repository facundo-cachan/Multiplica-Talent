import { NavigationContainer } from '@react-navigation/native'

import AppStackNavigator from '@navigation/AppStackNavigator'

const AppNavigation = () => (
  <NavigationContainer>
    <AppStackNavigator />
  </NavigationContainer>
)

export default AppNavigation