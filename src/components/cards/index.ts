import BorderRounded from './borderRounded'

import type { StyleProp } from '@components'

interface CardsProps {
  elevation?: number
  children?: JSX.Element | JSX.Element[] | string
  style?: {
    card?: StyleProp
    title?: StyleProp
    subTitle?: StyleProp
    content?: StyleProp
    cover?: StyleProp
    actions?: StyleProp
  }
  testID?: string
  accessible?: boolean
  title: string
  subTitle?: string
  header?: string
  cover?: string
  buttons?: JSX.Element[]
}
export type { CardsProps }
export { BorderRounded }

