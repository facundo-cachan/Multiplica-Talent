export interface At {
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
}
export type Response = {
  status: number
  message?: string
  data: object
}
export interface User extends At {
  id: number | string
  name: string
  email: string | null
  email_verified_at: string | boolean
  permissions?: []
  roles?: []
  token: string | null
}
export type { Product } from './screens/product/interfaces'
