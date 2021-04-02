import Download from './Download'

export default {
  title: 'Containers/Download/Download',
  component: Download,
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    <Download {...args} />
  </div>
)

export const DownloadContent = Template.bind({})
DownloadContent.args = {}
DownloadContent.storyName = '다운로드'
