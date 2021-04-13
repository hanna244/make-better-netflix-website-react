import NavHeader from './NavHeader'

export default {
  title: 'Layout/Header/NavHeader',
  component: NavHeader,
}

const Template = (args) => <NavHeader {...args} />

export const hasNavHeader = Template.bind({})
hasNavHeader.args = {}
hasNavHeader.storyName = '헤더(Nav)'
