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
    onClick: { action: '버튼 클릭!' },
  },
}

const Template = (args) => <Input {...args} />

export const EmailNormalInput = Template.bind({})
EmailNormalInput.args = {
  id: 'userEmail',
}
EmailNormalInput.storyName = '이메일 인풋(normal)'
