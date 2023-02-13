import { StyleSheet } from 'react-native'

import { colors, fonts, fontsSizes } from '@styles/theme'
import { hp, wp } from '@utils/_dimensions'

const shadow = {
  elevation: 20,
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
},
  styles = StyleSheet.create({
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
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: wp(90),
      }
    },
    card: {
      backgroundColor: colors.secondary,
      borderWidth: 0,
      height: hp(15),
      marginTop: 20,
      padding: 20,
      width: wp(75),
      ...shadow
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
    textGreyBold: {
      ...fontsSizes.normal,
      ...fonts.normal.bold,
      marginTop: 20,
      color: '#9B9898',
    },
    textGrey: {
      ...fonts.normal.bold,
      color: '#9B9898',
      marginTop: 20,
    },
    scrollView: {
      height: hp(40),
    },
    preview: {
      borderRadius: 10,
      height: 55,
      width: 55,
    },
    layout: {
      padding: 20,
    },
    list: {
      borderRadius: 10,
      height: 'auto',
    },
    imageBox: {
      ...shadow,
      alignSelf: 'center',
      borderRadius: 10,
      height: hp(35),
      marginTop: 15,
      marginBottom: 25,
      width: wp(90),
    },
    image: {
      height: hp(35),
      width: wp(90),
    },
    box: {
      marginLeft: wp(5),
    }
  })

export default styles