import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { OurStory, HomeMerit, HomeFAQ } from '../../containers/index'

function Home() {
  return (
    <Defualt className="home">
      <OurStory />
      <HomeMerit />
      <HomeFAQ />
    </Defualt>
  )
}

export default Home
