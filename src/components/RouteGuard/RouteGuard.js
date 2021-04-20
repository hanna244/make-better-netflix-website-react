import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { netflixAuth } from 'api/netflixBase'

const RouteGuard = ({ ...restProps }) => {
  const isLogIn = netflixAuth.currentUser

  if (isLogIn) {
    return <Route {...restProps} />
  } else {
    return <Redirect to="/" />
  }
}

export default RouteGuard
