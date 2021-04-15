import { HomeType } from 'layout/LayoutTypes'
import { OurStory, HomeMerit, HomeFAQ } from 'containers/index'

function Home({ ...restProps }) {
  return (
    <HomeType className="home" {...restProps}>
      <OurStory />
      <HomeMerit />
      <HomeFAQ />
    </HomeType>
  )
}

export default Home
