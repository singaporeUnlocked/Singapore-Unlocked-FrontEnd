import {
    GET_PATIENT_LIST,
    GET_PATIENT_DATA
} from '../action/PatientAction'
import axios from '../../../axios'

const initialState = {
    patientList: [],
    displayPatient: null,
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
        case GET_PATIENT_DATA: {
            return {
                ...state,
                displayPatient: action.payload
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


export const getPatientData = (id) => (dispatch) => {
    axios.get('/patients/'+id).then((res) => {
        dispatch({
            type: GET_PATIENT_DATA,
            payload: res.data,
        })
    })
}
