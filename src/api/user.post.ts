import {TPayloadInterface} from '../constants/types';
import authAxios from './client';

// -----------Login---------------
export const UserLogin = (payload: TPayloadInterface) => {
  let result = authAxios.post('/api/account/Login', payload); //dummy endpoint
  return result;
};
