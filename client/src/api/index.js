import axios from 'axios'

const URL = 'http://127.0.0.1:8000';

export const fetchVideo = () => axios.get(`${URL}/video/`);
export const createCustomer = (payload) => axios.post(`${URL}/Sigup/`,payload);
export const getLogin = () => axios.get(`${URL}/Sigin/`);
export const fetchDictionary = () => axios.get(`${URL}/dictionary/`);
export const ferchComment = () => axios.get(`${URL}/Comment/`);
export const createComment = (payload) => axios.post(`${URL}/Comment/create`,payload);
export const deleteComment = (payload) => axios.post(`${URL}/Comment/delete`,payload);
export const updateComment = (payload) => axios.post(`${URL}/Comment/update`,payload);
export const fetchBlog = () => axios.get(`${URL}/Blog/`);
export const createBlog = (payload) => axios.post(`${URL}/Blog/`,payload);
export const fetchQuiz = () => axios.get(`${URL}/quiz/`);
export const fetchMyCourse = () => axios.get(`${URL}/MyCourse/`);
export const editCustomer = (payload) => axios.post(`${URL}/UpdateCustomer/`,payload);


