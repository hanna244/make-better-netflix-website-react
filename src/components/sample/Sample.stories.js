import Sample from './Sample'

export default {
  title: 'Components/From/Sample',
  component: Sample,
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    <Sample {...args} />
  </div>
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.storyName = 'Normal'
