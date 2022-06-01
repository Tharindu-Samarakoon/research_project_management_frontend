import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'});

export const studentLogin = (formData) => API.post('/student/auth', formData);

