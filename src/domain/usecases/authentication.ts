import {AccountModel} from '../models/account-model'

type AutrenticationParams = {
  email:string, 
  password:string
}

export interface Authentication{
  auth(params:AutrenticationParams):Promise<AccountModel>
}