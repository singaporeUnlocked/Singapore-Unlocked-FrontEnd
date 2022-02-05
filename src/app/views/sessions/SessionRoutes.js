import NotFound from './NotFound'
import Patients from '../dashboard/Patients'
import Patient from '../dashboard/Patient'

const sessionRoutes = [
    {
        path: '/session/404',
        component: NotFound,
    },
    {
        path: '/dashboard/patients',
        component: Patients
    },
    {
        path: '/dashboard/patient',
        component: Patient
    }
]

export default sessionRoutes
