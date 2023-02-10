import {Text, TouchableOpacity} from 'react-native';

import {Icons, colorCommon, sizeCommon} from '@components';
import {colors, fonts, fontsSizes} from '@styles/theme';

import styles from '@styles/screens';

import type {ButtonProps} from '.';

type Props = ButtonProps;

const Simple = ({
  color,
  contentStyle,
  loading = false,
  disabled,
  title,
  accessibilityLabel,
  style,
  testID,
  iconLeft,
  iconRight,
  size,
  variant,
  onPress,
}: Props): JSX.Element => (
  <TouchableOpacity
    onPress={onPress}
    disabled={Boolean(disabled)}
    testID={String(testID)}
    accessibilityLabel={String(accessibilityLabel || title)}
    style={[
      styles.row,
      {
        backgroundColor: contentStyle?.backgroundColor
          ? colors[contentStyle?.backgroundColor]
          : 'transparent',
        ...style,
      },
    ]}>
    {iconLeft && (
      <Icons.FontAwesome5
        loading={loading}
        color={color}
        style={{marginRight: 10}}
        {...iconLeft}
      />
    )}
    <Text
      style={[
        {...fonts[size || sizeCommon][variant || 'normal']},
        {
          backgroundColor: 'transparent',
          color: colors[color || colorCommon],
          fontSize: fontsSizes[size || sizeCommon].fontSize,
          width: '90%',
          ...contentStyle,
        },
      ]}>
      {title}
      {iconRight && <Icons.FontAwesome5 color={color} {...iconRight} />}
    </Text>
  </TouchableOpacity>
);

export default Simple;
