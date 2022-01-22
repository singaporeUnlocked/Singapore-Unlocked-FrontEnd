import axios from '../../../axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'

export const loginRequest = (email, password) => (dispatch) => {
    console.log("running");
    
    axios.post('/login',
        {
            "email": email,
            "password": password
        }
    ).then((res) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: res.data,
        })
    })
}