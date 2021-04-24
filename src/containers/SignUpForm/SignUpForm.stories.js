import SignUpForm from './SignUpForm'

export default {
  title: 'Containers/Form/SignUpForm',
  component: SignUpForm,
}

const Template = (args) => (
  <div style={{ background: 'rgb(146 161 70)' }}>
    <SignUpForm {...args} />
  </div>
)

export const SignUpFormNormal = Template.bind({})
SignUpFormNormal.args = {}
SignUpFormNormal.storyName = '회원가입 폼(normal)'
