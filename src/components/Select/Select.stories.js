import Select from './Select'

export default {
  title: 'Components/From/Select',
  component: Select,
}

const Template = (args) => <Select {...args} />

export const NormalSelect = Template.bind({})
NormalSelect.args = {
  option: [
    { list: '한국어', value: 'korean' },
    { list: '영어', value: 'english' },
  ],
  id: 'language',
}
NormalSelect.storyName = '셀렉트(normal)'
