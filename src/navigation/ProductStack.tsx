import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Screen } from './types'

const screensProduct = [
  {
    name: 'ProductHome',
    screen: require('../screens/product/index').default,
  },
  {
    name: 'ProductDetails',
    screen: require('../screens/product/details').default,
  },
]

const Stack = createNativeStackNavigator()

const ProductStack = () => (
  <Stack.Navigator initialRouteName="ProductHome">
    {screensProduct.map(({ name, screen, title }: Screen, index: number) => {
      const options = title ? { title } : { headerShown: Boolean(name === 'ProductDetails'), headerBackVisible: false, }
      return (
        <Stack.Screen
          key={index}
          name={name}
          component={screen}
          options={options}
        />
      )
    })}
  </Stack.Navigator>
)
export default ProductStack