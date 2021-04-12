import NavHeader from './NavHeader'

export default {
  title: 'Layout/Header/NavHeader',
  component: NavHeader,
}

const Template = (args) => <NavHeader {...args} />

export const NavHeader = Template.bind({})
NavHeader.args = {}
NavHeader.storyName = '헤더(Nav)'
