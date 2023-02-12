import { useContext } from 'react'
import { Platform, SafeAreaView, StatusBar, View } from 'react-native'

import { ThemeContext } from '@providers/providerTheme'
import { height } from '@utils/_dimensions'

import { Loaders } from '@components/'

const Default = ({
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
        <View
          testID="Layout"
            style={[
            {
              minHeight: height,
            },
            style,
          ]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  )
}

export default Default