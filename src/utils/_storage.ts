/**
 * Method for LocalStorage
 * setData allways return Array object
 *
 * @function
 */

import AsyncStorage from '@react-native-async-storage/async-storage'

const getData = async (name: string) => {
  try {
    const value = await AsyncStorage.getItem(String(name))
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    console.log('📤 getData', e)
  }
  return null
}

const setData = async (name: string, data: any) => {
  try {
    let currentState = await getData(String(name))
    let temp: any[] = []
    if (currentState) {
      temp = [...currentState, data]
    } else {
      temp = [data]
    }
    await AsyncStorage.setItem(String(name), JSON.stringify(temp))
    console.log('📦 Data saved in storage')
    return true
  } catch (e) {
    console.log('📥 setData', e)
    return false
  }
}

const deleteData = async (name: string) => {
  await AsyncStorage.removeItem(String(name))
}

export { setData, getData, deleteData }
