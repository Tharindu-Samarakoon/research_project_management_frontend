import axios from 'axios'
import {URL} from '../constants/url'

const API = axios.create({ baseURL: URL});

export const studentLogin = (formData) => API.post('/student/auth', formData);

export const studentReg = (formData) => API.post('/student/register', formData);

