import {
    GET_CLIENT_LIST
} from '../action/PatientAction'

const initialState = {
    clientList: [],
}

const PatientReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_LIST: {
            return {
                ...state,
                clientList: [...action.payload],
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default PatientReducer;
