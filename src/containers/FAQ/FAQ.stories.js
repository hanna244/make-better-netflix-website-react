import FAQ from './FAQ'

export default {
  title: 'Containers/Home/FAQ',
  component: FAQ,
}

const Template = (args) => <FAQ {...args} />

export const FAQGroup = Template.bind({})
FAQGroup.args = {
  heddingProps: { as: 'h3', label: '질문과 답변 목록' },
}
FAQGroup.storyName = '질문과 답변 목록'
