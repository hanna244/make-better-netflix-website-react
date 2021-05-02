import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const RouteGuard = ({ isLoggedIn, redirect, ...restProps }) => {
  console.log(`RouteGuard_isLoggedIn : ${isLoggedIn}`)
  if (isLoggedIn) {
    return <Route {...restProps} />
  } else {
    return <Redirect to={redirect} />
  }
}

export default RouteGuard
