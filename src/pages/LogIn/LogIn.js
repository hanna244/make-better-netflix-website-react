import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { NoButtonType } from 'layout/LayoutTypes'
import { LogInContainerStyle } from './LogIn.style'
import { LogInForm } from 'containers'
import { LogInCommonBackgroundStyle } from 'styles/customCommon'

function LogIn({ ...restProps }) {
  let history = useHistory()
  const handleMoveBrowse = useCallback(() => {
    history.push('/browse')
  }, [history])

  return (
    <NoButtonType className="LogIn">
      <LogInCommonBackgroundStyle
        path="Cover.jpg"
        dim
        as="section"
        {...restProps}
      >
        <LogInContainerStyle>
          <LogInForm handleClick={handleMoveBrowse} />
        </LogInContainerStyle>
      </LogInCommonBackgroundStyle>
    </NoButtonType>
  )
}

export default LogIn
