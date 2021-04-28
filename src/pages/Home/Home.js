import { DefualtType } from 'layout/LayoutTypes'
import { OurStory, HomeMerit, HomeFAQ } from 'containers/index'

function Home({ ...restProps }) {
  return (
    <DefualtType className="home" {...restProps}>
      <OurStory />
      <HomeMerit />
      <HomeFAQ />
    </DefualtType>
  )
}

export default Home
