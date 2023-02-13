import { NavigationContainer } from '@react-navigation/native'

import AppStackNavigator from '@navigation/AppStackNavigator'

export type Route = {
  name: 'Product' // should be keyof RootStackParamList
}
const routes: Route[] = [
  {
    name: 'Product',
  },
]

const AppNavigation = () => (
  <NavigationContainer>
    <AppStackNavigator routeByRole={routes} />
  </NavigationContainer>
)

export default AppNavigation