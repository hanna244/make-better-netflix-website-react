import { string } from 'prop-types'
import React, { useCallback } from 'react'
import {
  OuterContainer,
  InnerContainer,
  HeaderHomeLink,
  HeaderLogInLink,
  HeaderLogo,
} from './DefaultHeader.style'
import { useHistory } from 'react-router-dom'

const DefaultHeader = ({ className, hasLogInButton, ...restProps }) => {
  let history = useHistory()

  const handleMoveLogIn = useCallback(() => {
    history.push('/login')
  }, [history])

  const handleMoveHome = useCallback(
    (e) => {
      e.preventDefault()
      history.push('/')
    },
    [history]
  )

  return (
    <OuterContainer>
      <InnerContainer className={className} {...restProps}>
        <h1>
          <HeaderHomeLink onClick={handleMoveHome}>
            <HeaderLogo alt="넷플릭스 홈" />
          </HeaderHomeLink>
        </h1>
        {hasLogInButton ? <HeaderLogInLink onClick={handleMoveLogIn} /> : null}
      </InnerContainer>
    </OuterContainer>
  )
}

DefaultHeader.propTypes = {
  /** 사용자 정의 클래스 명을 설정할 수 있습니다. */
  className: string,
}

export default DefaultHeader
