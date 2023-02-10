/**
 * Products Screen
 *
 * @screen
 */

import { useTheme } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'

import fetcher from '@utils/_fetcher'

import { Buttons, Texts } from '@components'
import Layout from '@layouts/'

import type { ProductScreenProps } from '../types'
import type { Product } from './interfaces'

type Response = { data: Product[]; status: number }

const ProductsScreen = ({
  navigation,
}: ProductScreenProps): JSX.Element => {
  const { colors } = useTheme()
  const [products, setProducts] = useState([{ "createdAt": "2022-12-09T06:34:25.607Z", "id": "1", "image": "https://loremflickr.com/640/480/transport", "is_redemption": false, "points": 16434, "product": "Handmade Metal Shoes" }, { "createdAt": "2022-12-09T17:02:51.904Z", "id": "2", "image": "https://loremflickr.com/640/480/technics", "is_redemption": false, "points": 92984, "product": "Recycled Plastic Tuna" }, { "createdAt": "2022-12-09T10:20:00.909Z", "id": "3", "image": "https://loremflickr.com/640/480/technics", "is_redemption": false, "points": 42416, "product": "Fantastic Granite Bacon" }, { "createdAt": "2022-12-09T00:30:23.966Z", "id": "4", "image": "https://loremflickr.com/640/480/city", "is_redemption": true, "points": 23913, "product": "Fantastic Fresh Gloves" }, { "createdAt": "2022-12-08T18:54:56.243Z", "id": "5", "image": "https://loremflickr.com/640/480/people", "is_redemption": true, "points": 69814, "product": "Rustic Rubber Bacon" }, { "createdAt": "2022-12-09T14:12:11.097Z", "id": "6", "image": "https://loremflickr.com/640/480/business", "is_redemption": false, "points": 81585, "product": "Tasty Concrete Cheese" }, { "createdAt": "2022-12-09T12:50:53.209Z", "id": "7", "image": "https://loremflickr.com/640/480/nightlife", "is_redemption": false, "points": 88323, "product": "Oriental Cotton Keyboard" }, { "createdAt": "2022-12-08T20:32:14.169Z", "id": "8", "image": "https://loremflickr.com/640/480/animals", "is_redemption": true, "points": 87794, "product": "Oriental Soft Pants" }, { "createdAt": "2022-12-09T05:46:47.645Z", "id": "9", "image": "https://loremflickr.com/640/480/food", "is_redemption": true, "points": 13063, "product": "Luxurious Rubber Bacon" }, { "createdAt": "2022-12-09T10:56:34.206Z", "id": "10", "image": "https://loremflickr.com/640/480/transport", "is_redemption": false, "points": 91311, "product": "Elegant Rubber Fish" }, { "createdAt": "2022-12-09T12:36:43.169Z", "id": "11", "image": "https://loremflickr.com/640/480/city", "is_redemption": false, "points": 44871, "product": "Recycled Wooden Salad" }, { "amount": 16, "createdAt": "2023-02-04T07:48:16.249Z", "from_account_id": 781, "id": "12", "image": "https://loremflickr.com/640/480/food", "is_redemption": false, "points": 93367, "product": "Licensed Metal Salad", "reason": "test16", "to_account_id": 369, "verification_code": "8319" }, { "amount": 16, "createdAt": "2023-02-04T08:45:26.468Z", "from_account_id": 781, "id": "13", "image": "https://loremflickr.com/640/480/food", "is_redemption": false, "points": 33432, "product": "Ergonomic Plastic Bacon", "reason": "test16", "to_account_id": 369, "verification_code": "8319" }])

  useLayoutEffect(() => {
    (async () => {
      await fetcher({
        url: 'products',
      }).then(({ data, status }: Response) => {
        if (status >= 200 && status < 300) {
          if (data.length >= 0) {
            setProducts(data)
          }
        }
      })
    })()
  }, [])

  const goToProduct = (itemId: Product['id']) => {
    navigation.navigate('ProductDetails', { itemId: parseInt(itemId) })
  }

  return (
    <Layout loading={Boolean(products.length < 0)}>
      <Texts.Default
        text="SWIPE & SELECT"
        variant="bold"
        color="secondary"
        size="big"
        style={{ margin: 5, textAlign: 'center' }}
        adjustsFontSizeToFit={true}
      />
      {products.map(({ id, product }: Product) => (
        <Buttons.Simple
          key={id}
          title={product}
          color={colors.text}
          variant="bold"
          size="big"
          style={{ margin: 5, textAlign: 'center' }}
          contentStyle={{ borderWidth: 2, borderColor: 'red', color: '#fff' }}
          onPress={() => goToProduct(id)}
        />
      ))}
      <Buttons.Simple
        title="Help"
        color={colors.text}
        variant="bold"
        size="big"
        style={{ margin: 5, textAlign: 'center' }}
        onPress={() => console.log('Help')}
      />
    </Layout>
  )
}

export default ProductsScreen