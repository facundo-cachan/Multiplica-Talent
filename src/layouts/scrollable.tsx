import { useContext } from 'react'
import { Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native'

import { ThemeContext } from '@providers/providerTheme'
import { height, width } from '@utils/_dimensions'

import { Loaders } from '@components/'

const Scrollable = ({
  children,
  loading,
  style,
}: {
  children: JSX.Element
  loading?: boolean
  style?: React.CSSProperties
}) => {
  const { dark } = useContext(ThemeContext)  
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={style}>
      <StatusBar
        animated={true}
        barStyle={
          Platform.OS === 'ios'
            ? dark
              ? 'dark-content'
              : 'light-content'
            : dark
              ? 'dark'
              : 'light'
        }
      />
      {loading ? (
        <Loaders.Default />
      ) : (
        <ScrollView
          testID="Layout"
          contentContainerStyle={[
            {
              minHeight: height,
              minWidth: width,
            },
            style,
          ]}>
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Scrollable