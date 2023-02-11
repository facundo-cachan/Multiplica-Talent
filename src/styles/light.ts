import { color as dark } from './dark'
import { colors } from './theme'

const color = '#fff'
const styles = {
  colors: {
    background: color,
    border: colors.secondary,
    card: colors.secondary,
    notification: colors.background,
    primary: colors.primary,
    text: dark,
  },
  input: {
    backgroundColor: 'transparent',
    color,
  },
  mainContainer: {
    backgroundColor: colors.primary,
    color,
  },
  scrollView: {
    backgroundColor: colors.primary,
  },
  text: {
    color: dark,
  },
}

export { color }
export default styles