import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { NoButtonType } from 'layout/LayoutTypes'
import { LogInContainer, LogInBackground } from './LogIn.style'
import { LogInForm } from 'containers'

function LogIn({ ...restProps }) {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    history.push('/browse')
  }, [history])

  return (
    <NoButtonType className="LogIn">
      <LogInBackground dim as="section" {...restProps}>
        <LogInContainer>
          <LogInForm handleClick={handleMoveBrowse} />
        </LogInContainer>
      </LogInBackground>
    </NoButtonType>
  )
}

export default LogIn
