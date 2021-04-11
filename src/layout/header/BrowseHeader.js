import React, { useCallback } from 'react'
import {
  NavLink,
  Switch,
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import { string } from 'prop-types'
import { TV, Movie, MyList } from '../../pages/Browse'
import { Browse } from '../../pages'
import {
  OuterContainer,
  InnerContainer,
  HeaderHomeLink,
  HeaderLogo,
} from './Header.style'

const BrowseHeader = ({ className, hasLogInButton, ...restProps }) => {
  const history = useHistory()
  const { url } = useRouteMatch()

  console.log(url)

  const handleMoveHome = useCallback(
    (e) => {
      e.preventDefault()
      history.push('/browse')
    },
    [history]
  )
  return (
    <OuterContainer>
      <InnerContainer className={className} {...restProps}>
        <h1>
          <HeaderHomeLink onClick={handleMoveHome}>
            <HeaderLogo alt="브라우즈 홈" />
          </HeaderHomeLink>
        </h1>
        <nav>
          <a href="#go-to-browse" onClick={handleMoveHome}>
            홈
          </a>
          <NavLink to={`${url}/genre/tv`}>TV 프로그램</NavLink>
          <NavLink to={`${url}/genre/movie`}>영화</NavLink>
          <NavLink to={`${url}/mylist`}>내가 찜한 콘텐츠</NavLink>
        </nav>
        <Route path={`${url}/genre/tv`} component={TV} />
        <Route path={`${url}/genre/movie`} component={Movie} />
        <Route path={`${url}/mylist`} component={MyList} />
      </InnerContainer>
    </OuterContainer>
  )
}

// const BrowseHeader = () => {
//   return <div>테스트 입니다.</div>
// }

BrowseHeader.propTypes = {
  /** 사용자 정의 클래스 명을 설정할 수 있습니다. */
  className: string,
}

export default BrowseHeader
