import { faChevronLeft, faMoon } from '@fortawesome/free-solid-svg-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import OnboardingScreen from '@screens/boarding/'

import { Icons } from '@components'
// import Appbar from '@components/appBar';

import type { Navigation } from './types'

const screens: unknown = {
  Product: lazy(() => import('./ProductStack')),
},
  Stack = createNativeStackNavigator(),
  headerScreen = ({ navigation }: any) => ({
    headerLeft: () => (
      <Icons.FontAwesome5
        onPress={() => navigation.goBack()}
        icon={faChevronLeft}
        color="primary"
      />
    ),
    headerRight: () => (
      <Icons.FontAwesome5
        onPress={() => navigation.navigate('SignOut')}
        icon={faMoon}
        color="primary"
      />
    ),
    headerTitle: () => <></>,
  })

export default function AppStackNavigator({ routeByRole }: Navigation) {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      detachInactiveScreens={true}
      /* barStyle={{ paddingBottom: 48 }} */
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        /* header: () => <Appbar />, */
      }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      {routeByRole.length > 0 &&
        routeByRole.map(({ name }, index) => (
          <Stack.Screen
            key={index}
            name={name}
            options={headerScreen}
            // @ts-ignore
            component={screens[name]}
          />
        ))}
    </Stack.Navigator>
  )
}