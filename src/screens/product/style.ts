import { StyleSheet } from 'react-native'

import { colors, fonts, fontsSizes } from '@styles/theme'
import { hp, wp } from '@utils/_dimensions'

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
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    }
  },
  card: {
    backgroundColor: colors.secondary,
    borderWidth: 0,
    height: hp(15),
    marginTop: 20,
    padding: 20,
    width: wp(75),
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    ...fontsSizes.normal,
    ...fonts.normal.bold,
    marginBottom: 10,
  },
  subTitle: {
    ...fontsSizes.normal,
    ...fonts.huggest.bold,
    color: colors.background,
  },
  text: {
    marginBottom: 5,
  },
  textGrey: {
    ...fontsSizes.normal,
    ...fonts.normal.bold,
    marginTop: 20,
    color: '#9B9898',
  },
  scrollView: {
    /* ...screensStyle.scrollView, */
    borderWidth: 1, borderColor: 'olive',
  },
  preview: {
    borderRadius: 10,
    height: 55,
    width: 55,
  },
  itemText: {
    borderWidth: 1, borderColor: 'green',
  }
})

export default styles