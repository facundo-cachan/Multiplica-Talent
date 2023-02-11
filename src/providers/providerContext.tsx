import { createContext, useMemo, useState } from 'react'

import { Loaders } from '@components/'
import { ThemeProvider } from '@providers/providerTheme'

const AppContext = createContext()
const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const values = useMemo(
    () => ({
      setLoading,
      setUser,
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
        }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export { AppContext, AppProvider }
