import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { LoginContainer, LoginBackground } from './Login.style'
import { LoginForm } from '../../containers'

function Login({ ...restProps }) {
  return (
    <Defualt className="login">
      <LoginBackground dim as="section" {...restProps}>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </LoginBackground>
    </Defualt>
  )
}

export default Login
