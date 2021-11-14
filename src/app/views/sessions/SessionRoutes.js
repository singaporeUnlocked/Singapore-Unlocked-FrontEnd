import NotFound from './NotFound'
import JwtLogin from '../sessions/auth/Login3'

const sessionRoutes = [
    {
        path: '/session/login',
        component: JwtLogin,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
    {
        path: '/',
        component: JwtLogin,
    }
]

export default sessionRoutes
