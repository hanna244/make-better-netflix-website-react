import styled, { keyframes } from 'styled-components'
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
`
export const Head = styled.dt`
  position: relative;
  z-index: -10;
  padding: 2.1rem 3rem;
  border: solid ${getColor('black')};
  border-width: 1px 0;
  font-size: 3.2rem;
  line-height: 1.2;
  background: ${getColor('darkGray')};
`
export const Body = styled(Head)`
  ${resetList}
  padding: 2.1rem 3rem;
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

const changePlus = keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(45deg)
  }
`

export const PlusImg = styled.img`
  ${resetImg}
  position: absolute;
  width: 2.25rem;
  top: 20px;
  right: 30px;
  bottom: 20px;
  animation: ${changePlus} 0.3s ease-out forwards;
  /* transform: ${({ open }) => (open ? 'rotate(45deg)' : null)}; */
`
