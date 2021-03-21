import Checkbox from './Checkbox'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/From/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=602%3A6',
    },
  },
  argTypes: {
    fgColor: { control: 'color' },
  },
}

const Template = (args) => <Checkbox {...args} />

export const InvalidCheckbox = Template.bind({})
InvalidCheckbox.args = {
  label: '로그인 정보 저장',
}
InvalidCheckbox.storyName = '체크 박스(uncheck)'

export const ValidCheckbox = Template.bind({})
ValidCheckbox.args = {
  ...InvalidCheckbox.args,
  checked: true,
}
ValidCheckbox.storyName = '체크 박스(check)'
