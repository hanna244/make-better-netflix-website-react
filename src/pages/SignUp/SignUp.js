import React, { Fragment, useCallback } from 'react'
import { Button } from 'components'
import { NoButtonType } from 'layout/LayoutTypes'
import { useHistory } from 'react-router-dom'
import SignUpForm from '../../containers/SignUpForm/SignUpForm'

const SignUp = () => {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    history.push('/browse')
  }, [history])
  return (
    <NoButtonType className="SignUp">
      <SignUpForm handleClick={handleMoveBrowse} />
    </NoButtonType>
  )
}

export default SignUp
