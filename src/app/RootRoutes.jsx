import React from 'react'
import { Redirect } from 'react-router-dom'

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...errorRoute,
]

export default routes
