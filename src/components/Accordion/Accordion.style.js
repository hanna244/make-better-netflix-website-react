import styled from 'styled-components'
import {
  resetButton,
  resetDl,
  resetImg,
  resetList,
  resetPara,
} from '../../styles/common'
import { getColor } from '../../utils'

export const Item = styled.dl`
  ${resetDl}
  max-width: 90rem;
  /* overflow는 자식 요소가 넘쳐 날 때 사용할 수 있는 속성이다 그러므로 부모요소에게 적용한다.  */
  overflow: hidden;
`
Item.displayName = 'Body'

export const Head = styled.dt`
  position: relative;
  z-index: 100;
  padding: 2.1rem 3rem;
  border: solid ${getColor('black')};
  border-width: 1px 0;
  font-size: 3.2rem;
  line-height: 1.2;
  background: ${getColor('darkGray')};
`
Head.displayName = 'Head'

export const Body = styled(Head)`
  ${resetList}
  padding: 2.1rem 3rem;
  z-index: -10000000;
  font-size: 2.6rem;
  line-height: 1.5;

  p {
    ${resetPara}
    margin-top: 3rem;
  }
  p:nth-child(1) {
    margin-top: 0;
  }
`
Body.displayName = 'Body'

export const OpenButton = styled.button`
  ${resetButton}
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: none;
`
OpenButton.displayName = 'OpenButton'

export const PlusImg = styled.img`
  ${resetImg}
  position: absolute;
  width: 2.25rem;
  top: 20px;
  right: 30px;
  bottom: 20px;
`
PlusImg.displayName = 'PlusImg'
