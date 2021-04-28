import SignUpForm from './SignUpForm'

export default {
  title: 'Containers/Form/SignUpForm',
  component: SignUpForm,
}

const Template = (args) => (
  <div style={{ margin: '3rem', background: '#111' }}>
    <SignUpForm {...args} />
  </div>
)

export const SignUpFormNormal = Template.bind({})
SignUpFormNormal.args = {}
SignUpFormNormal.storyName = '회원가입 폼(normal)'
