import styled from 'styled-components'
import { InnerVideo } from '../../components'
import Download from '../Download/Download'

export const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2rem 0;
  margin: 0 1.8rem;
  text-align: center;

  @media (min-width: 60em) {
    flex-direction: ${({ direction }) => direction ?? 'row'};
    justify-content: space-between;
    text-align: left;
    padding: 6rem 0;
    margin: 0 auto;
    max-width: 120rem;
  }

  /* 추가적인 비디오 및 서브 이미지 스타일링 --------------------------------------------------- */

  .device {
    video {
      top: 16.28%;
      left: 12.93%;
      width: 73.53%;

      @media (min-width: 60em) {
        top: 21.28%;
      }
    }
  }
`
Container.displayName = 'Container'

export const TextContainer = styled.div`
  margin-top: 6rem;
  max-width: 33.9rem;

  @media (min-width: 60em) {
    margin: auto 0;
    max-width: 50.3rem;
  }
`
TextContainer.displayName = 'TextContainer'

export const Head = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    font-size: 4.8rem;
  }
`
Head.displayName = 'Head'

export const Description = styled.p`
  margin: 3rem 0 0;
  font-size: 1.6rem;
  line-height: 1.5;

  @media (min-width: 60em) {
    margin-top: 2rem;
    font-size: 2.6rem;
  }
`
Description.displayName = 'Description'

export const MediaWrapper = styled.figure`
  position: relative;
  margin: 1rem 0 0;
  padding: 0 0 6rem;
  max-width: 33.8rem;

  @media (min-width: 60em) {
    margin: 0;
    padding: 0;
    max-width: 48rem;
  }
`
MediaWrapper.displayName = 'MediaWrapper'

export const MeritVideo = styled(InnerVideo)`
  position: absolute;
  z-index: -100;
  /* n / 339px * 100% */
  top: 8.28%;
  left: 18.93%;
  width: 60.53%;
`
MeritVideo.displayName = 'MeritVideo'

export const DownloadStyle = styled(Download)`
  position: absolute;
  bottom: 7.6rem;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 60em) {
    bottom: 2.1rem;
  }
`
DownloadStyle.displayName = 'DownloadStyle'
