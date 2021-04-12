import { Redirect, Route, Switch } from 'react-router-dom'
import { Home, LogIn, PageNotFound, Profile, SignUp } from '../pages'
import { Browse } from '../pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/browse" component={Browse} />
      <Route path="/profile" component={Profile} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect to="/page-not-found" />
    </Switch>
  )
}

export default App
