import { colors } from './theme'

const color = '#000'
const styles = {
  colors: {
    background: color,
    border: colors.primary,
    card: colors.secondary,
    notification: colors.background,
    primary: colors.primary,
    text: '#fff',
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
    color: '#fff',
  },
}

export { color }
export default styles