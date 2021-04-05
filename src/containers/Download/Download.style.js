import styled from 'styled-components'
import { Container } from '../../components'
import { resetImg } from '../../styles/common'
import { setFont, getColor } from '../../utils'

export const ContainerStyle = styled(Container)`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
  border: 0.702778px solid ${getColor('gray')};
  border-radius: 4.96989px;
  width: 21.2rem;
  /* background: #111; */
  background: ${getColor('black')};

  @media (min-width: 60em) {
    width: 30.2rem;
    padding: 1.2rem 1.6rem;
  }
`
ContainerStyle.displayName = 'ContainerStyle'

export const PosterStyle = styled.img`
  ${resetImg}

  @media (min-width: 60em) {
    width: 6rem;
    height: 8.5rem;
  }
`
PosterStyle.displayName = 'PosterStyle'
export const TextContainerStyle = styled.div`
  display: flex;
  flex-flow: nowrap column;
  flex: 1;
  justify-content: center;
  margin-left: 1.1rem;
  text-align: left;

  @media (min-width: 60em) {
    margin-left: 1.6rem;
  }
`
TextContainerStyle.displayName = 'TextContainerStyle'
export const StoryText = styled.span`
  ${setFont(1, 1.2, 'blod')}

  @media (min-width: 60em) {
    ${setFont(1.4)}
  }
`
StoryText.displayName = 'StoryText'
export const SaveText = styled(StoryText)`
  ${setFont(0.85, 1.5)};
  color: ${getColor('blue')};

  @media (min-width: 60em) {
    ${setFont(1.2)}
  }
`
SaveText.displayName = 'SaveText'
export const DownloadStyle = styled.img`
  ${resetImg}

  @media (min-width: 60em) {
    width: 4.7rem;
    height: auto;
  }
`
DownloadStyle.displayName = 'DownloadStyle'
