/**
 * Product Details Screen
 *
 * @screen
 */

import { getData } from '@utils/_storage'
import { useContext, useLayoutEffect, useState } from 'react'
import { Image, View } from 'react-native'
// import fetcher from '@utils/_fetcherFake'

import { Buttons, Texts } from '@components'
import Layout from '@layouts/default'
import { ThemeContext } from '@providers/providerTheme'
import styles from './style'

import type { ProductScreenProps } from '../types'
import type { Product } from './interfaces'

const ProductDetailsScreen = ({
  navigation,
  route: {
    params: { itemId },
  },
}: ProductScreenProps): JSX.Element => {
  const { theme: { colors } } = useContext(ThemeContext)
  const [product, setProduct] = useState()

  useLayoutEffect(() => {
    (async () => {
      const getProducts = await getData('products')
      const details = await getProducts.find((product: Product) => product.id == itemId)
      setProduct(details)
      navigation.setOptions({ title: details.product })
    })()
  }, [])

  return (
    <Layout loading={!Boolean(product)}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: product?.image,
          }}
        />
      </View>
      <View style={styles.box}>
        <Texts.Default
          text="Detalles del producto"
          style={styles.textGrey}
        />
        <Texts.Default
          text={`Comprado el ${product?.createdAt}`}
          style={{ marginTop: 20 }}
        />
        <Texts.Default
          text="Con esta compra acumulaste"
          style={styles.textGrey}
        />
        <Texts.Default
          text={`${product?.points} puntos`}
          style={{ marginTop: 20 }}
        />
      </View>
      <Buttons.Simple
        title="Aceptar"
        variant="bold"
        size="big"
        contentStyle={{ ...styles.button.contentStyle, color: colors.primary }}
        style={styles.button.style}
        onPress={() => navigation.navigate('ProductHome')}
      />
    </Layout>
  )
}

export default ProductDetailsScreen