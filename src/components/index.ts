import type {TextStyle, ViewStyle} from 'react-native';
import type {ThemeProps} from '../styles/theme';

import * as Buttons from './buttons';
import * as Icons from './icons';
import * as Texts from './texts';

const sizeCommon = 'normal',
  colorCommon = 'primary';

export {sizeCommon, colorCommon, Buttons, Icons, Texts};

export type StyleProp = typeof ViewStyle &
  typeof TextStyle & {
    backgroundColor?: ThemeProps['color'] | undefined;
    color?: ThemeProps['color'] | undefined;
    size?: ThemeProps['size'] | undefined;
  };
