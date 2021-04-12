import DefaultHeader from './DefaultHeader'

export default {
  title: 'Layout/Header/DefaultHeader',
  component: DefaultHeader,
}

const Template = (args) => <DefaultHeader {...args} />

export const NormalHeader = Template.bind({})
NormalHeader.args = {}
NormalHeader.storyName = '헤더(normal)'
