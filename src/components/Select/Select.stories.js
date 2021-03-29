import Select from './Select'

export default {
  title: 'Components/From/Select',
  component: Select,
}

const Template = (args) => <Select {...args} />

export const NormalSelect = Template.bind({})
NormalSelect.args = {}
NormalSelect.storyName = '셀렉트(normal)'
