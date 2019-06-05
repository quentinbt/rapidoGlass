import { UserData } from 'angular-token';

export interface User {
  id?: number;
  provider?: string;
  uid?: string;
  name?: string;
  nickname?: string;
  image?: any;
  login?: string;
  is_admin?: boolean;
}
