import LogInForm from './LogInForm'

export default {
  title: 'Containers/LogInForm/LogInForm',
  component: LogInForm,
}

const Template = (args) => (
  <div style={{ background: '#c4c2c2' }}>
    <LogInForm {...args} />
  </div>
)

export const LogInFormNormal = Template.bind({})
LogInFormNormal.args = {}
LogInFormNormal.storyName = '로그인 폼(normal)'
