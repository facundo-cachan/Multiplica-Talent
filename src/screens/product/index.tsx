/**
 * Products Screen
 *
 * @screen
 */

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'

import { Buttons, Cards, Icons, Texts } from '@components'
import Layout from '@layouts/default'
import { AppContext } from '@providers/providerContext'
import { ThemeContext } from '@providers/providerTheme'
import screensStyles from '@styles/screens'
import fetcher from '@utils/_fetcher'
import _formatTime from '@utils/_formatTime'
import { setData } from '@utils/_storage'
import styles from './style'


import type { ProductScreenProps } from '../types'
import type { Product } from './interfaces'

type Response = { data: Product[]; status: number }

const ProductsScreen = ({
  navigation,
}: ProductScreenProps): JSX.Element => {
  const { dark, theme: { colors } } = useContext(ThemeContext)
  const { setUser, user } = useContext(AppContext)
  const [welcome, setWelcome] = useState('Bienvenido')
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState('won')
  const [filtered, setFiltered] = useState([])
  const [products, setProducts] = useState([])

  useLayoutEffect(() => {
    (async () => {
      await fetcher({
        url: 'products',
      }).then(({ data, status }: Response) => {
        if (status >= 200 && status < 300) {
          if (data.length >= 0) {
            setProducts(data)
            setFiltered(data)
            setData('products', data)
          }
        }
      })
    })()
  }, [])
  useEffect(() => {
    (async () => {
      let userName = 'Facundo Cachan'
      if (user !== null) {
        setWelcome((prev: string) => `${prev} de vuelta!`)
      } else {
        setUser(userName)
      }
    })()
  }, [user])
  useEffect(() => {
    const sum = products.reduce((acc: number, { is_redemption, points }: Partial<Product>) => {
      if (!is_redemption && points) {
        acc = acc + points
      }
      return acc
    }, 0)
    setTotal(sum)
  }, [products])

  const Item = ({ item }: any) => (
    <View style={[screensStyles.row, { padding: 7, justifyContent: 'space-between', }]}>
      <Image
        style={styles.preview}
        source={{
          uri: item.image,
        }}
      />
      <View style={screensStyles.columns}>
        <Texts.Default
          color={colors.text}
          text={item.product}
          variant="bold"
          size="small"
          style={{ marginLeft: 20, }}
        />
        <Texts.Default
          text={_formatTime(item.createdAt)}
          variant="bold"
          size="small"
          color={colors.text}
          style={{ marginLeft: 20 }}
        />
      </View>
      <View style={screensStyles.row}>
        <Texts.Default
          color={item.is_redemption ? '#FF0000' : '#00B833'}
          text={item.is_redemption ? '-' : '+'}
          variant="bold"
          size="small"
          style={{ marginRight: 1, }}
        />
        <Texts.Default
          color={colors.text}
          text={item.points}
          variant="bold"
          size="small"
        />
      </View>
      <Icons.FontAwesome5 icon={faChevronRight} onPress={() => navigation.navigate('ProductDetails', { itemId: parseInt(item.id) })} />
    </View>
  )
  const all = async () => {
    setFiltered(products)
    setFilter(null)
  }
  const won = async () => {
    setFiltered((prev: Product[]) => prev.filter((product: Product) => (!product.is_redemption)))
    setFilter('all')
  }
  const exchanged = async () => {
    setFiltered((prev: Product[]) => prev.filter((product: Product) => product.is_redemption))
    setFilter('all')
  }

  return (
    <Layout loading={Boolean(products && products.length < 0)} style={{ ...styles.layout, backgroundColor: colors.background }}>
      <Texts.Default
        text={welcome}
        variant="bold"
        color={colors.text}
        size="big"
        style={styles.text}
      />
      <Texts.Default
        text={user}
        variant="normal"
        color={colors.text}
        size="normal"
        style={styles.text}
      />
      <Texts.Default
        text="TUS PUNTOS"
        variant="bold"
        size="big"
        style={[styles.text, styles.textGreyBold]}
      />
      <View style={screensStyles.centered}>
        <Cards.BorderRounded
          title={`Diciembre`}
          subTitle={`${total} pts`}
          style={{
            card: styles.card,
            title: { ...styles.title, color: colors.primary },
            subTitle: { ...styles.subTitle, alignSelf: 'center', color: colors.primary },
            content: {
              backgroundColor: 'transparent'
            }
          }}
        />
      </View>
      <Texts.Default
        text="TUS MOVIMIENTOS"
        variant="bold"
        size="big"
        style={[styles.text, styles.textGreyBold]}
      />
      <View style={styles.list}>
        <FlatList
          initialNumToRender={4}
          style={[styles.scrollView, { backgroundColor: dark ? '#939090' : '#fff' }]}
          data={filtered ?? []}
          keyExtractor={({ id }: Product) => id}
          renderItem={(product: Product) => <Item {...product} />}
          onEndReachedThreshold={0.01}
        />
      </View>
      {filter === 'all' ? (<Buttons.Simple
        title="Todos"
        variant="bold"
        size="big"
        contentStyle={{ ...styles.button.contentStyle, color: colors.primary }}
        style={styles.button.style}
        onPress={all}
      />) : (<View style={[screensStyles.row, { justifyContent: 'space-between', }]}>
        <Buttons.Simple
          title="Ganados"
          variant="bold"
          size="normal"
          contentStyle={{ ...styles.button.contentStyle, color: colors.primary }}
          style={styles.button.middle}
          onPress={won}
        />
        <Buttons.Simple
          title="Canjeados"
          variant="bold"
          size="normal"
          contentStyle={{ ...styles.button.contentStyle, color: colors.primary }}
          style={styles.button.middle}
          onPress={exchanged}
        />
      </View>)}
    </Layout>
  )
}

export default ProductsScreen