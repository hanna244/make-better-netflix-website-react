import Container from './Container'
import { withDesign } from 'storybook-addon-designs'
import Logo from '../Logo/Logo'

export default {
  title: 'Components/UI/Container',
  component: Container,
  decorators: [withDesign],
}

const Template = (args) => <Container {...args} />

export const NormalContainer = Template.bind({})
NormalContainer.args = {
  children: <Logo width="350" />,
}
NormalContainer.storyName = '컨테이너 버튼(normal)'

export const CenterContainer = Template.bind({})
CenterContainer.args = {
  ...NormalContainer.args,
  align: 'center',
}
CenterContainer.storyName = '컨테이너 버튼(center)'

export const LeftContainer = Template.bind({})
LeftContainer.args = {
  ...NormalContainer.args,
  align: 'left',
}
LeftContainer.storyName = '컨테이너 버튼(left)'

export const RightContainer = Template.bind({})
RightContainer.args = {
  ...NormalContainer.args,
  align: 'right',
}
RightContainer.storyName = '컨테이너 버튼(right)'
