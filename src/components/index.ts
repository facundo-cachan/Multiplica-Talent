import type { TextStyle, ViewStyle } from 'react-native'
import type { ThemeProps } from '../styles/theme'

import * as Buttons from './buttons'
import * as Cards from './cards'
import * as Icons from './icons'
import * as Loaders from './loaders'
import * as Texts from './texts'

const sizeCommon = 'normal'

export { sizeCommon, Buttons, Cards, Icons, Loaders, Texts }

export type StyleProp = typeof ViewStyle &
  typeof TextStyle & {
    backgroundColor?: ThemeProps['color'] | undefined
    size?: ThemeProps['size'] | undefined
  }
