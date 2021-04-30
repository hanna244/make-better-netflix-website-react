import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom'
import { RouteGuard } from 'components'
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
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <RouteGuard
        exact
        path="/browse"
        component={Browse}
        redurect={useLocation().pathname}
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
