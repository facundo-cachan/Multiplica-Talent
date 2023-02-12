/**
 * Products Screen
 *
 * @screen
 */

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'

import { Buttons, Cards, Icons, Texts } from '@components'
import Layout from '@layouts/default'
import { AppContext } from '@providers/providerContext'
import { ThemeContext } from '@providers/providerTheme'
import screensStyles from '@styles/screens'
import { setData } from '@utils/_storage'
// import fetcher from '@utils/_fetcher'
import styles from './style'


import type { ProductScreenProps } from '../types'
import type { Product } from './interfaces'

// type Response = { data: Product[]; status: number }

const hardProducts: Product[] = [{ createdAt: "2022-12-09T06:34:25.607Z", id: "1", image: "https://loremflickr.com/cache/resized/65535_50586881058_a4a2f82fa6_c_640_480_nofilter.jpg", is_redemption: false, points: 16434, product: "Handmade Metal Shoes" }, { createdAt: "2022-12-09T17:02:51.904Z", id: "2", image: "https://loremflickr.com/cache/resized/65535_52046941078_e939777c4c_c_640_480_nofilter.jpg", is_redemption: false, points: 92984, product: "Recycled Plastic Tuna" }, { createdAt: "2022-12-09T10:20:00.909Z", id: "3", image: "https://loremflickr.com/cache/resized/65535_52046941078_e939777c4c_c_640_480_nofilter.jpg", is_redemption: false, points: 42416, product: "Fantastic Granite Bacon" }, { createdAt: "2022-12-09T00:30:23.966Z", id: "4", image: "https://loremflickr.com/cache/resized/65535_52102968052_dc95201d03_c_640_480_nofilter.jpg", is_redemption: true, points: 23913, product: "Fantastic Fresh Gloves" }, { createdAt: "2022-12-08T18:54:56.243Z", id: "5", image: "https://loremflickr.com/cache/resized/65535_52441180971_8afbb2ae92_c_640_480_nofilter.jpg", is_redemption: true, points: 69814, product: "Rustic Rubber Bacon" }, { createdAt: "2022-12-09T14:12:11.097Z", id: "6", image: "https://loremflickr.com/cache/resized/7327_8721148981_e6868226e7_c_640_480_nofilter.jpg", is_redemption: false, points: 81585, product: "Tasty Concrete Cheese" }, { createdAt: "2022-12-09T12:50:53.209Z", id: "7", image: "https://loremflickr.com/cache/resized/11_16211310_c2dd5b0b68_c_640_480_nofilter.jpg", is_redemption: false, points: 88323, product: "Oriental Cotton Keyboard" }, { createdAt: "2022-12-08T20:32:14.169Z", id: "8", image: "https://loremflickr.com/cache/resized/65535_52606873101_3052cc57ee_c_640_480_nofilter.jpg", is_redemption: true, points: 87794, product: "Oriental Soft Pants" }, { createdAt: "2022-12-09T05:46:47.645Z", id: "9", image: "https://loremflickr.com/cache/resized/65535_52595455922_d966b53f92_z_640_480_nofilter.jpg", is_redemption: true, points: 13063, product: "Luxurious Rubber Bacon" }, { createdAt: "2022-12-09T10:56:34.206Z", id: "10", image: "https://loremflickr.com/cache/resized/65535_52300721594_a0f75c3dd6_b_640_480_nofilter.jpg", is_redemption: false, points: 91311, product: "Elegant Rubber Fish" }, { createdAt: "2022-12-09T12:36:43.169Z", id: "11", image: "https://loremflickr.com/cache/resized/65535_52102968052_dc95201d03_c_640_480_nofilter.jpg", is_redemption: false, points: 44871, product: "Recycled Wooden Salad" }, { "amount": 16, createdAt: "2023-02-04T07:48:16.249Z", "from_account_id": 781, id: "12", image: "https://loremflickr.com/cache/resized/65535_52611857680_bd4d863604_c_640_480_nofilter.jpg", is_redemption: false, points: 93367, product: "Licensed Metal Salad", reason: "test16", to_account_id: 369, verification_code: "8319" }, { "amount": 16, createdAt: "2023-02-04T08:45:26.468Z", "from_account_id": 781, id: "13", image: "https://loremflickr.com/cache/resized/65535_52633153171_996d4ed95a_b_640_480_nofilter.jpg", is_redemption: false, points: 33432, product: "Ergonomic Plastic Bacon", reason: "test16", to_account_id: 369, verification_code: "8319" }]

const ProductsScreen = ({
  navigation,
}: ProductScreenProps): JSX.Element => {
  const { theme: { colors } } = useContext(ThemeContext)
  const { setUser, user } = useContext(AppContext)
  const [welcome, setWelcome] = useState('Bienvenido')
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])

  useLayoutEffect(() => {
    (async () => {
      setTimeout(() => {
        setProducts(hardProducts);
        setData('products', hardProducts)
      }, 2000)
      /* 
              await fetcher({
                url: 'products',
              }).then(({ data, status }: Response) => {
                if (status >= 200 && status < 300) {
                  if (data.length >= 0) {
                    setProducts(data)
                  }
                }
              })
               */
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
    (async () => {
      if (products.length > 0) {
        const sum = await products.reduce((acc: number, { is_redemption, points }: Partial<Product>) => {
          if (!is_redemption && points) {
            acc = acc + points
          }
          return acc
        }, 0);        
        setTotal(sum)
      }
    })()
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
          text={item.product}
          variant="bold"
          size="small"
          style={{ marginLeft: 20, }}
        />
        <Texts.Default
          text={String(dayjs(item.createdAt.slice(0, 10), 'MMMM'))}
          variant="bold"
          size="small"
          style={{ marginLeft: 20, }}
        />
      </View>
      <View style={screensStyles.row}>
        <Texts.Default
          text={item.is_redemption ? '-' : '+'}
          variant="bold"
          size="small"
          style={{ marginLeft: 20, }}
        />
        <Texts.Default
          text={item.points}
          variant="bold"
          size="small"
        />
      </View>
      <Icons.FontAwesome5 icon={faChevronRight} onPress={() => navigation.navigate('ProductDetails', { itemId: parseInt(item.id) })} />
    </View>
  )

  return (
    <Layout loading={Boolean(products && products.length < 0)} style={{ ...styles.layout, backgroundColor: colors.background, }}>
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
          style={styles.scrollView}
          data={products ?? []}
          keyExtractor={({ id }: Product) => id}
          renderItem={(product: Product) => <Item {...product} />}
          onEndReachedThreshold={0.01}
          onEndReached={(info: any) => {
            console.log(info)
          }}
        />
      </View>
      <Buttons.Simple
        title="Todos"
        variant="bold"
        size="big"
        contentStyle={{ ...styles.button.contentStyle, color: colors.primary }}
        style={styles.button.style}
        onPress={() => console.log('Help')}
      />
    </Layout>
  )
}

export default ProductsScreen