// ========== Http
// import all packages
import axios from 'axios';
import {MOBILE_API_URL} from '@env';

export const api = axios.create({
  baseURL: MOBILE_API_URL,
});
