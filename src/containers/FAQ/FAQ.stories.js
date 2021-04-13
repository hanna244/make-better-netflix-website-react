import FAQ from './FAQ'

export default {
  title: 'Containers/FAQ/FAQ',
  component: FAQ,
  decorators: [
    (Story) => (
      <div style={{ margin: 30 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    <FAQ {...args} />
  </div>
)

export const FAQGroup = Template.bind({})
FAQGroup.args = {}
FAQGroup.storyName = '자주 묻는 질문'
