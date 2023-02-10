import { StyleSheet } from 'react-native'

import { colors } from '@styles/theme'
import { width } from '@utils/_dimensions'

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 5,
    width,
  },
  layout:{
    marginLeft: 20
  }
})

export default styles