import { combineReducers } from 'redux'
import PatientReducer from './PatientReducer'

const RootReducer = combineReducers({
    patient: PatientReducer,
})

export default RootReducer
