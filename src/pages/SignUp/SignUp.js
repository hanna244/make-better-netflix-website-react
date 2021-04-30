import React, { useCallback } from 'react'
import { NoButtonType } from 'layout/LayoutTypes'
import { useHistory } from 'react-router-dom'
import SignUpForm from '../../containers/SignUpForm/SignUpForm'
import { SignUpBackgroundStyle, SignUpContainerStyle } from './SignUp.style'

const SignUp = ({ ...restProps }) => {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    history.push('/browse')
  }, [history])

  return (
    <NoButtonType className="SignUp">
      <SignUpBackgroundStyle
        src="signup_cover.jpg"
        dim
        as="section"
        {...restProps}
      >
        <SignUpContainerStyle>
          <SignUpForm handleClick={handleMoveBrowse} />
        </SignUpContainerStyle>
      </SignUpBackgroundStyle>
    </NoButtonType>
  )
}

export default SignUp
