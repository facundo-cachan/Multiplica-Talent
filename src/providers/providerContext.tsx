import { createContext, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'

import { Loaders } from '@components/'
import { ThemeProvider } from '@providers/providerTheme'

const AppContext = createContext()
const AppProvider = ({ children }: any) => {
  const scheme = useColorScheme()
  const [dark, darkTheme] = useState(scheme === 'dark')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const values = useMemo(
    () => ({
      setLoading,
      setUser,
      darkTheme
    }),
    [],
  )
  if (loading) {
    return <Loaders.Default />
  }

  return (
    <ThemeProvider>
      <AppContext.Provider
        value={{
          ...values,
          user,
          dark
        }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export { AppContext, AppProvider }
