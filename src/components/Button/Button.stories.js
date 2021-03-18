import Button from './Button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'From/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A96',
    },
  },
}

const Template = (args) => <Button {...args} />

export const RouteButtonSmall = Template.bind({})
RouteButtonSmall.args = {
  label: '로그인',
}
RouteButtonSmall.storyName = '링크 버튼(Small)'

export const SubmitButton = Template.bind({})
SubmitButton.args = {
  ...RouteButtonSmall.args,
  size: 'medium',
}
SubmitButton.storyName = '링크 버튼(Medium)'
