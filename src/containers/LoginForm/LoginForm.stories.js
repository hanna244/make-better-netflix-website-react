import LoginForm from './LoginForm'

export default {
  title: 'Containers/LoginForm/LoginForm',
  component: LoginForm,
}

const Template = (args) => (
  <div style={{ background: '#c4c2c2' }}>
    <LoginForm {...args} />
  </div>
)

export const LoginFormNormal = Template.bind({})
LoginFormNormal.args = {}
LoginFormNormal.storyName = '로그인 폼(normal)'
