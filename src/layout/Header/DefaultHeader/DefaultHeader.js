import { string } from 'prop-types'
import React, { useCallback } from 'react'
import {
  OuterContainerStyle,
  InnerContainerStyle,
  HeaderHeadingStyle,
  HeaderHomeLinkStyle,
  HeaderLogInLinkStyle,
  HeaderLogoStyle,
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
    <OuterContainerStyle>
      <InnerContainerStyle className={className} {...restProps}>
        <HeaderHeadingStyle>
          <HeaderHomeLinkStyle onClick={handleMoveHome}>
            <HeaderLogoStyle alt="넷플릭스 홈" />
          </HeaderHomeLinkStyle>
        </HeaderHeadingStyle>
        {hasLogInButton ? (
          <HeaderLogInLinkStyle onClick={handleMoveLogIn} />
        ) : null}
      </InnerContainerStyle>
    </OuterContainerStyle>
  )
}

DefaultHeader.propTypes = {
  /** 사용자 정의 클래스 명을 설정할 수 있습니다. */
  className: string,
}

export default DefaultHeader
