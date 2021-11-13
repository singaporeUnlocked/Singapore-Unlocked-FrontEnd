import NotFound from './NotFound'
import JwtLogin from './login/Login'

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
