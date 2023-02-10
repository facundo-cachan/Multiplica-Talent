/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import FlashMessage from 'react-native-flash-message'

import { USER_KEY } from '@env'
import { deleteData } from '@utils/_storage'

import AppNavigation from '@navigation/'
import { AppProvider } from '@providers/providerContext'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    (async () => {
      await deleteData('skip-intro')
      await deleteData(USER_KEY)
    })()
  }, [])
  return (
    <AppProvider>
      <AppNavigation />
      {/* @ts-ignore */}
      <FlashMessage
        position="top"
        style={{
          borderRadius: 25,
          maxWidth: '70%',
          minWidth: '70%',
          alignSelf: 'center',
          alignItems: 'center',
        }}
        floating
      />
    </AppProvider>
  )
}

export default App