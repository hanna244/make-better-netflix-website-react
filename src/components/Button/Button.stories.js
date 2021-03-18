import Button from './Button'

export default {
  title: 'From/Button',
  component: Button,
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
