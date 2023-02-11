/**
 * Method for fetch APIs
 * setData allways return Array object
 *
 * @function
 */

import { showMessage } from 'react-native-flash-message'

import { API_URL } from '@env'

export type PropsFetcher = {
  url: string
  method?: string
  params?: any
  headers?: {}
}

const fetcher = async ({
  url,
  method = 'get',
  params,
  headers,
}: PropsFetcher) => {
  try {
    let response = await fetch(`${API_URL}/${url}`, {
      body: JSON.stringify(params),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        ...headers,
      },
      method,
    })
    let json = await response.json()
    return { data: json, status: response.status }
  } catch (e: any) {
    showMessage({
      duration: 3000,
      message: 'No data to show',
      type: 'danger',
    })
    return { status: e.response.status }
  }
}

export default fetcher