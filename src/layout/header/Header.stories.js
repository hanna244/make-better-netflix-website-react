import Header from './Header'

export default {
  title: 'Layout/Header/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {}
DefaultHeader.storyName = '헤더(normal)'
