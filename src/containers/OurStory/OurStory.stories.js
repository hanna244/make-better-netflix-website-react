import OurStory from './OurStory'

export default {
  title: 'Containers/OurStory/OurStory',
  component: OurStory,
}

const Template = (args) => <OurStory {...args} />

export const NormalOurStory = Template.bind({})
NormalOurStory.args = {}
NormalOurStory.storyName = '아워스토리'
