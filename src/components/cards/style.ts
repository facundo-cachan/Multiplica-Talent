import { StyleSheet } from 'react-native'

import { colors } from '@styles/theme'
import { width } from '@utils/_dimensions'

const styles = StyleSheet.create({
  card: {
    borderColor: colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
  },
  text: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 5,
    width,
  }
})

export default styles