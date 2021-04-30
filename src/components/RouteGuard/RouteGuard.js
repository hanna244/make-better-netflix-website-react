import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { netflixAuth } from 'api/netflixBase'

const RouteGuard = ({ redirect, ...restProps }) => {
  console.log(redirect)

  if (netflixAuth.currentUser) {
    return <Route {...restProps} />
  } else {
    return <Redirect to={redirect} />
  }
}

export default RouteGuard
