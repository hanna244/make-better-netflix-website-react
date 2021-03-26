import Footer from './Footer'

export default {
  title: 'Layout/Footer/Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />

export const DefaultFooter = Template.bind({})
DefaultFooter.args = {}
DefaultFooter.storyName = '푸터(normal)'
