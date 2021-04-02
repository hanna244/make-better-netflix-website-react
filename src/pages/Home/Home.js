import { useCallback } from 'react'
import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { OurStory, Merit, FAQ } from '../../containers/index'

function Home() {
  return (
    <Defualt className="home">
      <OurStory />
      <Merit />
      <FAQ />
    </Defualt>
  )
}

export default Home
