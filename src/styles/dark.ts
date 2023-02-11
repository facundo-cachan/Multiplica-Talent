import { color as light } from './light'
import { colors } from './theme'

const color = '#000'
const styles = {
  colors: {
    background: color,
    border: colors.primary,
    card: colors.secondary,
    notification: colors.background,
    primary: colors.primary,
    text: light,
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
    color: light,
  },
}

export { color }
export default styles