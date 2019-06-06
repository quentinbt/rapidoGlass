import { UserData } from 'angular-token'

export interface User {
  id?: number
  provider?: string
  uid?: string
  login?: string
  is_admin?: boolean
  first_name?: string
  last_name?: string
  address?: string
  zipcode?: string
  city?: string
}
