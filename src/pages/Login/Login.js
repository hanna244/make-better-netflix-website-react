import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { LogInContainer, LogInBackground } from './LogIn.style'
import { LogInForm } from '../../containers'

function LogIn({ ...restProps }) {
  return (
    <Defualt className="LogIn">
      <LogInBackground dim as="section" {...restProps}>
        <LogInContainer>
          <LogInForm />
        </LogInContainer>
      </LogInBackground>
    </Defualt>
  )
}

export default LogIn
