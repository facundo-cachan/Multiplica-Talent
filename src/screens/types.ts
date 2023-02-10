import { RouteProp } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import type { RootStackParamList } from '../navigation/types'

export type BoardingScreenProps = NativeStackScreenProps<RootStackParamList>
export type ProductsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Products'>
}
export type ProductScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>
  route: RouteProp<RootStackParamList, 'ProductDetails'>
}