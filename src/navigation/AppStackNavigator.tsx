import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Product from './ProductStack'

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Product"
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <Stack.Screen
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  )
}