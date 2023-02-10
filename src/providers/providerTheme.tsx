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
  const [dark, darkTheme] = useState(scheme === 'dark')
  const [theme, setTheme] = useState({ fonts, fontsSizes, colors }),
    values = useMemo(
      () => ({
        theme,
        darkTheme,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dark],
    )

  useEffect(() => {
    console.log(`🎨 Changing theme to ${dark ? 'dark' : 'light'}`)
    setTheme({ colors, fonts, fontsSizes, ...(dark ? DarkTheme : LightTheme) })
  }, [dark])

  return (
    <ThemeContext.Provider
      value={{
        ...values,
        dark,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }