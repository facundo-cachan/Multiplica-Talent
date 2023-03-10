import { StyleSheet } from 'react-native'

import { colors, fonts, fontsSizes } from '@styles/theme'
import { hp, wp } from '@utils/_dimensions'
import { Platform } from 'react-native'
const btnStyle = {
  backgroundColor: colors.secondary,
  borderRadius: 10,
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: 30,
},
  shadow = {
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
        ...btnStyle,
        width: wp(90),
      },
      middle: {
        ...btnStyle,
        width: wp(42),
      },
    },
    card: {
      backgroundColor: colors.secondary,
      borderWidth: 0,
      height: hp(15),
      marginTop: Platform.OS === 'ios' ? hp(1.5) : hp(2),
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
      marginBottom: hp(1),
    },
    textGreyBold: {
      ...fontsSizes.normal,
      ...fonts.normal.bold,
      marginTop: Platform.OS === 'ios' ? hp(2) : hp(1),
      color: '#9B9898',
    },
    textGrey: {
      ...fonts.normal.bold,
      color: '#9B9898',
      marginTop: Platform.OS === 'ios' ? hp(2) : hp(1),
    },
    scrollView: {
      height: Platform.OS === 'ios' ? hp(40) : hp(35),
    },
    preview: {
      borderRadius: 10,
      height: 55,
      width: 55,
    },
    layout: {
      padding: hp(2),
    },
    list: {
      borderRadius: 10,
      height: 'auto',
    },
    imageBox: {
      ...shadow,
      alignSelf: 'center',
      borderRadius: 10,
      height: hp(45),
      marginTop: 15,
      marginBottom: Platform.OS === 'ios' ? hp(5) : hp(1),
      width: wp(90),
    },
    image: {
      height: hp(45),
      width: wp(90),
    },
    box: {
      marginLeft: wp(5),
    },
    points: {
      ...fonts.big.bold,
      marginTop: 20
    },
  })

export default styles