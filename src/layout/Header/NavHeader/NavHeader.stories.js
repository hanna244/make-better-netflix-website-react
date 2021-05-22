import { BrowserRouter as Router } from 'react-router-dom'
import NavHeader from './NavHeader'

export default {
  title: 'Layout/Header/NavHeader',
  component: NavHeader,
  decorators: [
    (Story) => (
      <Router style={{ margin: 30 }}>
        <Story />
      </Router>
    ),
  ],
}

const Template = (args) => <NavHeader {...args} />

export const NormalNavHeader = Template.bind({})
NormalNavHeader.args = {}
NormalNavHeader.storyName = '헤더(normal)'

export const SelectNavHeader = Template.bind({})
SelectNavHeader.args = {
  ...NormalNavHeader.args,
}
SelectNavHeader.storyName = '헤더(select)'

export const ShowSelectNavHeader = Template.bind({})
ShowSelectNavHeader.args = {
  ...SelectNavHeader.args,
}
ShowSelectNavHeader.storyName = '헤더(show dropdown)'
