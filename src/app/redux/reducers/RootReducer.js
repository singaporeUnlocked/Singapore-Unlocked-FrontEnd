import { combineReducers } from 'redux'
import PatientReducer from './PatientReducer'
import UserReducer from './UserReducer'

const RootReducer = combineReducers({
    patient: PatientReducer,
    user: UserReducer
})

export default RootReducer
