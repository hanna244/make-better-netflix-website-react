import Select from './Select'

export default {
  title: 'Components/From/Select',
  component: Select,
}

const Template = (args) => <Select {...args} />

export const NormalSelect = Template.bind({})
NormalSelect.args = {
  option: ['한국어', '영어', '중국어'],
  id: 'language',
}
NormalSelect.storyName = '셀렉트(normal)'
