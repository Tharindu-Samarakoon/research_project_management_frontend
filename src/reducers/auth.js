export default (state = { authData: null }, action) => {
    switch (action.type) {
        case 'STUDENT_LOGIN':
            localStorage.setItem('student', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data};
        case 'STUDENT_SIGNUP':
            return state;
        default:
            return state;
    }
}