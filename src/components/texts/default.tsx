import { Text } from 'react-native'

import { colors, fonts } from '@styles/theme'
import { colorCommon, sizeCommon } from '../'

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
      { color: colors[color || colorCommon]},
      style,
    ]}
    adjustsFontSizeToFit={true}
    {...props}>
    {text}
  </Text>
);

export default Default;
