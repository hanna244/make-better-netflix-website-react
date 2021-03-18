import Button from './Button'

export default {
  title: 'From/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Link = Template.bind({})
Link.args = {
  label: '로그인',
}

Link.storyName = '버튼(Route login)'
