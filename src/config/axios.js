import axios from 'axios';

export const vuelosApi = axios.create({
  baseURL: 'http://localhost:3004',
});
