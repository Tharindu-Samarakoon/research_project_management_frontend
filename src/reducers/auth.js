export default (state = { authData: null }, action) => {
    switch (action.type) {
        case 'STUDENT_LOGIN':
            localStorage.setItem('student', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data};
        case 'STUDENT_REGISTRATION':
            localStorage.setItem('student', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data};
        case 'STAFF_REGISTRATION':
            localStorage.setItem('staff', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data};

        default:
            return state;
    }
}