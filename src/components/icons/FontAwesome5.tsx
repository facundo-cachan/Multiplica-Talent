import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

import {colorCommon, sizeCommon} from '@components/';
import {colors, fontsSizes} from '@styles/theme';

import type {IconProps} from '.';

const FontAwesome5 = ({
  name,
  size,
  color,
  style,
  loading,
  disabled,
  onPress,
}: IconProps) => (
  <TouchableOpacity
    onPress={onPress}
    ß
    disabled={disabled}
    style={[
      {
        margin: 0,
        padding: 0,
      },
      style,
    ]}>
    <FontAwesomeIcon
      icon={loading ? faSpinner : name}
      size={fontsSizes[size || sizeCommon].fontSize}
      color={colors[color || colorCommon]}
    />
  </TouchableOpacity>
);

export default FontAwesome5;
