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

export const Normal = Template.bind({})
Normal.args = {}
Normal.storyName = 'Normal'
