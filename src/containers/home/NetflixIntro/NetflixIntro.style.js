import styled from 'styled-components'
import { PhotoStyle } from '../../../components/Photo/Photo.style'
import { resetPara } from '../../../styles/common'
import { getColor } from '../../../utils'

// 넷플릭스 인트로 두번째 아이템의 작은 이미지 스타일링
export const MainImg = styled(PhotoStyle)`
  margin-top: 1rem;

  @media (min-width: 60em) {
    width: 48rem;
    margin-top: 0;
  }
`
export const SubImg = styled(PhotoStyle)`
  padding-right: ${({ paddingright }) => paddingright ?? null};
  margin-left: ${({ marginleft }) => marginleft ?? null};

  @media (min-width: 60em) {
    height: auto;
    width: ${({ widewidth }) => widewidth ?? null};
    padding-right: ${({ widepaddingright }) => widepaddingright ?? null};
    margin-left: ${({ widemarginleft }) => widemarginleft ?? null};
  }
`
export const SmallContextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 2;
  justify-content: center;
  text-align: left;
  margin-left: 1rem;
  height: 5.5rem;

  @media (min-width: 60em) {
    margin-left: 1.6rem;
    height: 10.9rem;
  }
`
export const SmallContextTitle = styled.p`
  ${resetPara}
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    font-size: 1.4rem;
  }
`

export const SmallContextSubTitle = styled(SmallContextTitle)`
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${getColor('blue')};

  @media (min-width: 60em) {
    font-size: 1.2rem;
  }
`
