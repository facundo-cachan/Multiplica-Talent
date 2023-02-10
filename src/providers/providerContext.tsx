import { createContext, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'

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
      darkTheme,
      setLoading,
      setRolesAndPermissions,
      setUser,
    }),
    [],
  )
  if (loading) {
    return <Loaders.Default />
  }

  return (
    <AppContext.Provider
      value={{
        ...values,
        dark,
        rolesAndPermissions,
        user,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
