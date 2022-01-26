import {
    GET_PATIENT_LIST
} from '../action/PatientAction'
import axios from '../../../axios'

const initialState = {
    patientList: [],
    loaded: false
}

export default function PatientReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PATIENT_LIST: {
            return {
                ...state,
                patientList: [...action.payload],
                loaded: true
            }
        }
        default:
            return {
                ...state,
            }
    }
}


export async function getPatientList(dispatch) {
    await axios.get('/patients').then((res) => {
        dispatch({
            type: GET_PATIENT_LIST,
            payload: res.data,
        })
    })
}