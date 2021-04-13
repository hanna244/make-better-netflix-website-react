import NavHeader from './NavHeader'

export default {
  title: 'Layout/Header/NavHeader',
  component: NavHeader,
}

const Template = (args) => <NavHeader {...args} />

export const HasNavHeader = Template.bind({})
HasNavHeader.args = {}
HasNavHeader.storyName = '헤더(Nav)'
