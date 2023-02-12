import { colors } from './theme'

const color = '#fff'
const styles = {
  colors: {
    background: '#F8F8F8',
    border: colors.secondary,
    card: colors.secondary,
    notification: colors.background,
    primary: colors.primary,
    text: '#000',
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
    color: '#000',
  },
}

export { color }
export default styles