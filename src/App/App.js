import { Redirect, Route, Switch } from 'react-router-dom'
import { RouteGuard } from 'components'
import styled from 'styled-components'
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
      <RelativeStyle class="hasPosition">
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </RelativeStyle>
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

// login, signup 페이지 footer에 position:ab 적용을 위한 스타일
const RelativeStyle = styled.div`
  position: relative;
`

export default App
