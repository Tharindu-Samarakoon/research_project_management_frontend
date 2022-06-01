import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        //Login student
        console.log(formData);
        const { data } = await api.studentLogin(formData);
        dispatch({ type: 'STUDENT_LOGIN', data} );
        console.log('something');
    } catch (error) {
        console.log(error);
    }
}