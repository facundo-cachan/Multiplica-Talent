import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { describe, expect, test } from '@jest/globals'
import { render } from '@testing-library/react-native'

import { Icons } from '@components'

describe('Testing Touchable Icons', () => {
  test('Icons FontAwesome5', async () => {
    const { container: { props: { icon: { iconName } } } } = render(
      <Icons.FontAwesome5 icon={faChevronRight} />
    )
    expect(iconName === 'chevron-right').toBe(true)
  })
})
