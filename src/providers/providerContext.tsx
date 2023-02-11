import { createContext, useMemo, useState } from 'react'

import { Loaders } from '@components/'

const AppContext = createContext()
const AppProvider = ({ children }: any) => {
  const scheme = useColorScheme()
  const [dark, darkTheme] = useState(scheme === 'dark')
  const [user, setUser] = useState(null)
  const [rolesAndPermissions, setRolesAndPermissions] = useState()
  const [loading, setLoading] = useState(false);

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
