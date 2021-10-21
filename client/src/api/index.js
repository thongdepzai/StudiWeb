import axios from 'axios'

const URL = 'http://127.0.0.1:8000';

export const fetchVideo = () => axios.get(`${URL}/video/`);
export const createCustomer = (payload) => axios.post(`${URL}/Sigup/`,payload);
export const getLogin = () => axios.get(`${URL}/Sigin/`);
export const fetchDictionary = () => axios.get(`${URL}/dictionary/`);

