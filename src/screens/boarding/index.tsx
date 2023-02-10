import { useLayoutEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

import { getData, setData } from '@utils/_storage'

import type { BoardingScreenProps } from '../types'

const Dots = ({ selected }: { selected: boolean }) => {
  let backgroundColor: string = selected
    ? 'rgba(0, 0, 0, 0.8)'
    : 'rgba(0, 0, 0, 0.3)'
  return (
    <View
      style={{
        backgroundColor,
        height: 6,
        marginHorizontal: 3,
        width: 6,
      }}
    />
  )
}
const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
)
const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
)
const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
)
const OnboardingScreen = ({ navigation }: BoardingScreenProps) => {
  useLayoutEffect(() => {
    const skip = getData('skip-intro')
    if (skip) {
      navigation.navigate('Product')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => {
        setData('skip-intro', true)
        navigation.navigate('Product')
      }}
      onDone={() => navigation.navigate('Product')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('@assets/img/onboarding-img1.png')} />,
          subtitle: 'Una nueva manera de conectar con la musica',
          title: 'Conecta con el mundo',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('@assets/img/onboarding-img2.png')} />,
          subtitle: 'Encuentra personas que comparten tu pasion',
          title: 'Descubre',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('@assets/img/onboarding-img3.png')} />,
          subtitle: 'Crea tu red de aficionados',
          title: 'Acerca',
        },
      ]}
    />
  )
}

export default OnboardingScreen