import Promotion from './Promotion'

export default {
  title: 'Containers/Promotion/Promotion',
  component: Promotion,
}

const Template = (args) => <Promotion {...args} />

export const PromotionMobile = Template.bind({})
PromotionMobile.args = {}
PromotionMobile.storyName = '프로모션(mobile)'
