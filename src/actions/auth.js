import { useDispatch } from 'react-redux';
import * as api from '../api';



export const signIn = (formData, history) => async (dispatch) => {
    try {
        //Login student
        console.log(formData);
        const { data } = await api.studentLogin(formData);
        dispatch({ type: 'STUDENT_LOGIN', data} );
        history('/studentProfile');
    } catch (error) {
        console.log(error);
    }
}

export const studentRegistration = (formData, history) => async (dispatch) => {
    try {
        //Login student
        console.log(formData);
        const { data } = await api.studentReg(formData);
        dispatch({ type: 'STUDENT_REGISTRATION', data} );
        history('/studentProfile');
        console.log('hello');
    } catch (error) {
        console.log(error);
    }
}

export const staffSignIn = (formData, history) => async (dispatch) => {
    try {
        //Login student
        console.log(formData);
        const { data } = await api.staffLogin(formData);
        dispatch({ type: 'STAFF_LOGIN', data} );
        history('/staff');
    } catch (error) {
        console.log(error);
    }
}