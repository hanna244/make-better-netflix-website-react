import Profile from './Profile'

export default {
  title: 'Components/From/Profile',
  component: Profile,
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    {/* <Profile {...args} style={{ textAlign: 'right', width: '179px' }} /> */}
    <Profile {...args} style={{ width: '179px' }} />
  </div>
)

export const NormalProfile = Template.bind({})
NormalProfile.args = {}
NormalProfile.storyName = '프로필(normal)'

export const HasDropdownProfile = Template.bind({})
HasDropdownProfile.args = {
  showMemu: true,
}
HasDropdownProfile.storyName = '프로필(Dropdown)'
