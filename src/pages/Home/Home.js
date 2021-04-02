import { useCallback } from 'react'
import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { OurStory, HomeMerit, FAQ } from '../../containers/index'

function Home() {
  return (
    <Defualt className="home">
      <OurStory />
      <HomeMerit />
      <FAQ />
    </Defualt>
  )
}

export default Home
