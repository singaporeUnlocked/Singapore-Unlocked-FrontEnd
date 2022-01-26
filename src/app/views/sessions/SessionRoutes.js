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
        path: '/dashboard/patients/123',
        component: Patient
    }
]

export default sessionRoutes
