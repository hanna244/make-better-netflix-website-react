import Select from './Select'

export default {
  title: 'Components/From/Select',
  component: Select,
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    <Select {...args} />
  </div>
)

export const NormalSelect = Template.bind({})
NormalSelect.args = {
  id: 'story_select',
  optionList: [
    { label: '한국어', value: 'korean' },
    { label: '영어', value: 'english' },
  ],
  label: '언어 선택',
  a11yLabel: true,
}
NormalSelect.storyName = '셀렉트(normal)'
