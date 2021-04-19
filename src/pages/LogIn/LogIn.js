import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { LogInType } from 'layout/LayoutTypes'
import { LogInContainer, LogInBackground } from './LogIn.style'
import { LogInForm } from 'containers'

function LogIn({ ...restProps }) {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    console.log('클릭')
    history.push('/browse')
  }, [history])

  return (
    <LogInType className="LogIn">
      <LogInBackground dim as="section" {...restProps}>
        <LogInContainer>
          <LogInForm handleClick={handleMoveBrowse} />
        </LogInContainer>
      </LogInBackground>
    </LogInType>
  )
}

export default LogIn
