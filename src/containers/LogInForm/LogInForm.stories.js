import LogInForm from './LogInForm'

export default {
  title: 'Containers/Form/LogInForm',
  component: LogInForm,
}

const Template = (args) => (
  <div style={{ margin: '3rem', background: '#111' }}>
    <LogInForm {...args} />
  </div>
)

export const LogInFormNormal = Template.bind({})
LogInFormNormal.args = {}
LogInFormNormal.storyName = '로그인 폼(normal)'
