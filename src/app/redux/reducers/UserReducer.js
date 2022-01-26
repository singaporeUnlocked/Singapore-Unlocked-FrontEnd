import {
    LOGIN_REQUEST
} from '../action/UserAction'
import axios from '../../../axios'

const initialState = {
    UserDetails: [],
    isAuth: null
}

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            console.log(action.payload);
            return {
                UserDetails: action.payload,
                isAuth: action.isAuth
            }
        }
        default:
            return {
                ...state,
            }
    }
}


export const loginRequest = (email, password) => (dispatch) => {
    
    axios.post('/login',
        {
            "email": email,
            "password": password
        }
    ).then((res) => {
        if (res.status == "200") {
            dispatch({
                type: LOGIN_REQUEST,
                payload: res.data,
                isAuth: true
            })
        } else {
            dispatch({
                type: LOGIN_REQUEST,
                payload: [],
                isAuth: false
            }) 
        }

    })
}


export default UserReducer;
