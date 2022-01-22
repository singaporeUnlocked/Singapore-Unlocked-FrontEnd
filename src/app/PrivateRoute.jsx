// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component }) => {

  // Add your own authentication on the below line.
  //TODO check if user is logged in
  const isLoggedIn = false;

  return (
    <Route
      render={props => <Component {...props} />
      }
    />
  )
}

export default PrivateRoute