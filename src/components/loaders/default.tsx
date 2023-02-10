import { ActivityIndicator, View } from 'react-native'

import { width } from '@utils/_dimensions'

const loaderStyle = {
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  width,
}

const Default = ({ size = 100 }) => (
  <View style={loaderStyle}>
    <ActivityIndicator size={size} />
  </View>
)

export default Default