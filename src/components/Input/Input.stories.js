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

/* input Email -------------------------------------------------------------- */

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
  error: true,
}
EmailInvalidInput.storyName = '이메일 인풋(invalid, right)'

/* input Email and Phone ---------------------------------------------------- */

export const EmailAndPhoneNormalInput = Template.bind({})
EmailAndPhoneNormalInput.args = {
  id: 'userEmailAndPhone',
  type: 'text',
  label: '이메일 주소 또는 폰 번호',
  alertMessege: '정확한 이메일 주소 또는 폰 번호를 입력하세요.',
  dark: true,
}
EmailAndPhoneNormalInput.storyName = '이메일/폰 인풋(normal, dark)'

export const EmailAndPhoneValidInput = Template.bind({})
EmailAndPhoneValidInput.args = {
  ...EmailAndPhoneNormalInput.args,
  valid: true,
  context: 'nana@gamil.com',
}
EmailAndPhoneValidInput.storyName = '이메일/폰 인풋(valid, dark)'
export const EmailAndPhoneInvalidInput = Template.bind({})
EmailAndPhoneInvalidInput.args = {
  ...EmailAndPhoneNormalInput.args,
  invalid: true,
  context: 'nana',
  error: true,
}
EmailAndPhoneInvalidInput.storyName = '이메일/폰 인풋(invalid, dark)'
