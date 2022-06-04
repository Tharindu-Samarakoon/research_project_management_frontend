import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'});

export const studentLogin = (formData) => API.post('/student/auth', formData);

export const studentReg = (formData) => API.post('/student/register', formData);

export const staffLogin = (formData) => API.post('/staff/auth', formData);

