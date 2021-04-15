import React, { Fragment, useCallback } from 'react'
import { Button } from 'components'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    console.log('클릭')
    history.push('/browse')
  }, [history])
  return (
    <Fragment>
      <div style={{ fontSize: '50px' }}>회원가입 페이지 입니다.</div>
      <Button label="회원가입" handleClick={handleMoveBrowse} />
    </Fragment>
  )
}

export default SignUp
