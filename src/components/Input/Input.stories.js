import Input from './Input'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/From/Input',
  component: Input,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A98',
    },
  },
  argTypes: {
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
}

const Template = (args) => <Input {...args} />

export const EmailNormalInput = Template.bind({})
EmailNormalInput.args = {
  id: 'userEmail',
  type: 'email',
  label: '이메일 주소',
  alertMessege: '정확한 이메일 주소를 입력하세요.',
}
EmailNormalInput.storyName = '이메일 인풋(normal, right)'

export const EmailValidInput = Template.bind({})
EmailValidInput.args = {
  ...EmailNormalInput.args,
  valid: true,
  context: 'nana@gamil.com',
}
EmailValidInput.storyName = '이메일 인풋(valid, right)'

export const EmailInvalidInput = Template.bind({})
EmailInvalidInput.args = {
  ...EmailNormalInput.args,
  invalid: true,
  context: 'nana',
}
EmailInvalidInput.storyName = '이메일 인풋(invalid, right)'
