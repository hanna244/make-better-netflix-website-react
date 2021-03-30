import Home from './Home'

export default {
  title: 'Page/Home/Home',
  component: Home,
}

const Template = (args) => <Home {...args} />

export const MainHome = Template.bind({})
MainHome.args = {}
MainHome.storyName = '홈'
