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
  children: <Logo width="350" alt="넷플릭스 로고" />,
}
NormalContainer.storyName = '컨테이너(normal)'

export const CenterContainer = Template.bind({})
CenterContainer.args = {
  ...NormalContainer.args,
  style: { textAlign: 'center' },
}
CenterContainer.storyName = '컨테이너(center)'

export const LeftContainer = Template.bind({})
LeftContainer.args = {
  ...NormalContainer.args,
  style: { textAlign: 'left' },
}
LeftContainer.storyName = '컨테이너(left)'

export const RightContainer = Template.bind({})
RightContainer.args = {
  ...NormalContainer.args,
  style: { textAlign: 'right' },
}
RightContainer.storyName = '컨테이너(right)'
