import { ActivityIndicator, View } from 'react-native'

import { width } from '@utils/_dimensions'

const Default = ({ size = 100 }) => (
  <View style={{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width,
  }}>
    <ActivityIndicator size={size} />
  </View>
)

export default Default