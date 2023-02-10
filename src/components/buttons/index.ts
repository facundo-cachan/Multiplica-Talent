/**
 * Buttons Props
 * @param {string} iconLeft - render left icon, select name,.
 * @return Component
 */
import type {StyleProp} from '../';
import type {ThemeProps} from '../../styles/theme';
import type {IconProps} from '../icons';
import type {TextProps} from '../texts';

import {colors} from '@styles/theme';

import Simple from './simple';

export {Simple};

export interface ButtonProps {
  color?: ThemeProps['color'] | typeof colors;
  loading?: boolean;
  disabled?: boolean;
  title: TextProps['text'];
  accessibilityLabel?: string;
  contentStyle?: StyleProp;
  style?: StyleProp;
  labelStyle?: StyleProp;
  testID?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  size?: ThemeProps['size'];
  variant?: ThemeProps['variant'];
  onPress: () => void;
}
