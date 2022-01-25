import NotFound from './NotFound'
import Patients from '../dashboard/Patients'
const sessionRoutes = [
    {
        path: '/session/404',
        component: NotFound,
    },
    {
        path: '/dashboard/patients',
        component: Patients
    }
]

export default sessionRoutes
