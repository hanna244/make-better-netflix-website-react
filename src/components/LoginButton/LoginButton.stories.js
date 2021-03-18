import LoginButton from './LoginButton'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'From/Button',
  component: LoginButton,
  decorators: [withDesign],
  argTypes: {
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
    onClick: { action: '버튼 클릭!' },
  },
}

const Template = (args) => <LoginButton {...args} />

export const LoginButtonSmall = Template.bind({})
LoginButtonSmall.args = {
  label: '로그인',
}
LoginButtonSmall.storyName = '로그인 버튼(Small)'

export const LoginButtonMedium = Template.bind({})
LoginButtonMedium.args = {
  ...LoginButtonSmall.args,
}
LoginButtonMedium.storyName = '로그인 버튼(Medium)'
