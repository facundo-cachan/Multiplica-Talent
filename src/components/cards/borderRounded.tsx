import { View } from 'react-native'

import { Texts } from '@components'

import styles from './style'

import type { CardsProps } from './'

type Props = CardsProps

const BorderRounded = ({ children, style, title, subTitle, ...props }: Props) => (
  <View
    style={[
      styles.card,
      style?.card,
    ]}
    {...props}>
    <Texts.Default
      text={title ?? 'Title'}
      variant="bold"
      color="secondary"
      size="big"
      style={style?.title}
    />
    <Texts.Default
      text={subTitle ?? 'subTitle'}
      variant="bold"
      color="secondary"
      size="big"
      style={style?.subTitle}
    />
    {children}
  </View>
)

export default BorderRounded