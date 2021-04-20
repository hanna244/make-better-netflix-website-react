import { RouteGuard } from 'components'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  Home,
  LogIn,
  Movie,
  MyList,
  PageNotFound,
  Profile,
  SignUp,
  TV,
} from '../pages'
import { Browse } from '../pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <RouteGuard exact path="/browse" component={Browse} />
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
