import Navigation from './Navigation'

export default {
  title: 'Components/From/Navigation',
  component: Navigation,
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    <Navigation {...args} />
  </div>
)

export const NormalNav = Template.bind({})
NormalNav.args = {}
NormalNav.storyName = '네비게이션(normal)'
