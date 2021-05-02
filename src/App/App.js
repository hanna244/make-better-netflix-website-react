import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { RouteGuard } from 'components'
import { netflixAuth } from 'api/netflixBase'
import {
  Home,
  LogIn,
  Movie,
  MyList,
  PageNotFound,
  Profile,
  SignUp,
  TV,
  Browse,
} from '../pages'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    netflixAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        console.log('onAuthStateChanged_성공')
      } else {
        setIsLoggedIn(false)
        console.log('onAuthStateChanged_실패')
      }
      console.log(`onAuthStateChanged_user : ${user}`)
    })
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <RouteGuard
        exact
        isLoggedIn={isLoggedIn}
        path="/browse"
        component={Browse}
        redirect="/"
      />
      <Route path="/browse/genre/tv" component={TV} />
      <Route path="/browse/genre/movie" component={Movie} />
      <Route path="/browse/mylist" component={MyList} />
      <Route path="/profile" component={Profile} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect to="/page-not-found" />
    </Switch>
  )
}

export default App
