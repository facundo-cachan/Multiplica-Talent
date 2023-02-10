import { StyleSheet } from 'react-native'

import { colors } from './theme'

const distance = 10,
  styles = StyleSheet.create({
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    columns: {
      flex: 0,
      flexDirection: 'column',
    },
    divider: {
      borderBottomColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
      backgroundColor: '#c6c6',
      borderColor: '#666',
      borderWidth: 1,
      margin: 5,
      padding: 12,
    },
    mainContainer: {
      backgroundColor: 'transparent',
      borderColor: colors.primary,
      borderWidth: 1,
      color: '#000',
      flex: 1,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    marginVertical: {
      marginBottom: distance,
      marginTop: distance,
    },
    row: {
      alignItems: 'center',
      flex: 0,
      flexDirection: 'row',
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'transparent',
      flex: 1,
      marginBottom: distance * 2,
      paddingBottom: distance * 2,
    },
    text: {
      color: colors.primary,
    },
  })

export default styles