import axios from 'axios';
// import authAxios from './client'; //used for adding intercepters

// -----------Get All Users--------------
export const GetAllUsers = (limit: number) => {
  let result = axios.get(`https://randomuser.me/api/?results=${limit}`);
  return result;
};
