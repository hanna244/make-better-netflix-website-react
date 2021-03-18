import LoginButton from './LoginButton'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'From/Button',
  component: LoginButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=591%3A0',
    },
  },
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
  size: 'medium',
}
LoginButtonMedium.storyName = '로그인 버튼(Medium)'
