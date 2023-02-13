import { describe, expect, test } from '@jest/globals'
import { render } from '@testing-library/react-native'

import { Loaders } from '@components'

describe('Testing Loaders', () => {
  test('Loader Default', async () => {
    const r = render(
      <Loaders.Default />
    )
    const json = r.toJSON()
    const type = json?.children[0].type
    expect(type === 'ActivityIndicator').toBe(true)
  })
})
