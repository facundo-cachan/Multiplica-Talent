import { ParamListBase, StackNavigationState } from '@react-navigation/native'

import type { Route } from '../navigation'

type Params = { itemId: number; otherParam?: unknown }

export type RootStackParamList = ParamListBase & {
  Product: undefined
  ProductDetails: Params
}

export type Screen = {
  name: string
  screen: StackNavigationState<ParamListBase>
  title?: string
}

export type Navigation = {
  routeByRole: Route[]
}