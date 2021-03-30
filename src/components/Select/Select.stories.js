import Select from './Select'

export default {
  title: 'Components/From/Select',
  component: Select,
}

const Template = (args) => <Select {...args} />

export const NormalSelect = Template.bind({})
NormalSelect.args = {
  id: 'story_select',
  optionList: [
    { label: '한국어', value: 'korean' },
    { label: '영어', value: 'english' },
  ],
  label: '언어 선택',
  labelHidden: true,
}
NormalSelect.storyName = '셀렉트(normal)'
