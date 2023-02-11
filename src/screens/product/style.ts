import { StyleSheet } from 'react-native'

import screensStyle from '@styles/screens'
import { colors, fonts, fontsSizes } from '@styles/theme'
import { width, wp } from '@utils/_dimensions'

const styles = StyleSheet.create({
  button: {
    contentStyle: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      color: colors.background,
      justifyContent: 'center',
      padding: 14,
    },
    style: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      marginLeft: -20,
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(70),
    }
  },
  card: {
    backgroundColor: colors.secondary,
    borderWidth: 0,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: -20,
    padding: 20,
    width: wp(70),
  },
  title: {
    ...fontsSizes.normal,
    ...fonts.normal.bold,
    color: colors.background,
  },
  subTitle: {
    ...fontsSizes.normal,
    ...fonts.huge.bold,
    color: colors.background,
  },
  text: {
    backgroundColor: colors.background,
    marginTop: 5,
    width,
  },
  textGrey: {
    ...fontsSizes.normal,
    ...fonts.normal.bold,
    color: '#9B9898',
    marginTop: 5,
  },
  layout: {
    margin: 20,
    alignItems: 'center',
  },
  scrollView: {
    ...screensStyle.scrollView,
    borderWidth: 1,
    borderColor: 'olive',
    marginLeft: -30,
    heigth: 10,
    width: wp(70),
  }
})

export default styles