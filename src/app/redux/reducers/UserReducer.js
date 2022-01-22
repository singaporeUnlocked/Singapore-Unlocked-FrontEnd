import {
    LOGIN_REQUEST
} from '../action/UserAction'

const initialState = {
    UserDetails: [],
}

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            console.log(action.payload);

            return {
                UserDetails: action.payload
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default UserReducer;
