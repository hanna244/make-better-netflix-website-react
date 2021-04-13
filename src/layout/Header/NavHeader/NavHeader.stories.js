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

export const HasNavHeader = Template.bind({})
HasNavHeader.args = {}
HasNavHeader.storyName = '헤더(Nav)'
