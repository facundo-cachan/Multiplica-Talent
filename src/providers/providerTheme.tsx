import { createContext, useEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'

import DarkTheme from '@styles/dark'
import LightTheme from '@styles/light'
import { colors, fonts, fontsSizes } from '@styles/theme'

const ThemeContext = createContext()
const ThemeProvider = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[]
}): JSX.Element => {
  const scheme = useColorScheme()
  const [dark, darkTheme] = useState(scheme === 'light')
  const [theme, setTheme] = useState({ fonts, fontsSizes, colors }),
    values = useMemo(
      () => ({
        theme,
        darkTheme,
      }),
      [theme],
    )

  useEffect(() => {
    // console.log(`🎨 Theme ${dark ? 'dark' : 'light'}`)    
    setTheme({ colors, fonts, fontsSizes, ...(dark ? DarkTheme : LightTheme) })
  }, [dark])

  return (
    <ThemeContext.Provider
      value={{
        ...values,
        dark,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
