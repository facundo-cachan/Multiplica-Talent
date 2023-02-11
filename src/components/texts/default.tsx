import { Text } from 'react-native'

import { fonts } from '@styles/theme'
import { sizeCommon } from '../'

import type { TextProps } from './'

const Default = ({
  text,
  size,
  variant,
  color,
  style,
  ...props
}: TextProps): JSX.Element => (
  <Text
    style={[
      fonts[size || sizeCommon][variant || 'normal'],
      { color },
      style,
    ]}
    adjustsFontSizeToFit={true}
    {...props}>
    {text}
  </Text>
)

export default Default
