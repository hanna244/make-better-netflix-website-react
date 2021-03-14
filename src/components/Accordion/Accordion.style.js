import styled from 'styled-components'
import { resetList, resetDl, resetPara } from '../../styles/common'
import getColor from '../../utils/getColor'

export const Wrapper = styled.ul`
  ${resetList}
  margin-top: 3rem;

  @media (min-width: 60em) {
    margin: 5rem 15rem 0;
  }
`
export const Item = styled.dl`
  ${resetDl}
`
export const Head = styled.dt`
  // 버튼 위치 설정을 위한 position 속성
  position: relative;
  max-width: 90rem;
  padding: 1.1rem;
  font-size: 1.5rem;
  line-height: 1.2;
  background: ${getColor('darkGray')};

  @media (min-width: 60em) {
    padding: 2.1rem 3rem;
    font-size: 3.2rem;
  }
`

export const Body = styled.dd`
  padding: 0 1.1rem;
  background: ${getColor('darkGray')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: solid ${getColor('black')};
  border-width: 2.5px 0;

  @media (min-width: 60em) {
    padding: 2.1rem 3rem;
    border-width: 5px 0;
    font-size: 2.6rem;
    line-height: 1.5;
  }
  p {
    ${resetPara}
    margin: 1rem 0;
  }
`
