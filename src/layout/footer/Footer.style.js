import styled from 'styled-components'

import { Definition } from './compound_components'
import { Select } from 'components'
import { a11yHidden, resetList, resetPara } from 'styles/common'

import { getColor } from 'utils'

export const FooterStyle = styled.footer`
  color: ${getColor('gray')};
  padding: 2rem 0;
  margin: 0 1.8rem;
  max-width: 120rem;

  @media (min-width: 60em) {
    padding: 5rem 0;
    margin: 0 auto;
  }

  p {
    ${resetPara}
    display:inline-block;
    margin-top: 4rem;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.4;

    @media (min-width: 60em) {
      margin-top: 5rem;
      line-height: 1.2;
    }
  }
  .linkBreak {
    @media (min-width: 60em) {
      display: none;
    }
  }

  a:hover {
    text-decoration: underline;
    color: ${getColor('lightGray')};
  }
`
FooterStyle.displayName = 'FooterStyle'

export const DefinitionStyle = styled(Definition)`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.4;

  @media (min-width: 60em) {
    line-height: 1.2;
  }
`
DefinitionStyle.displayName = 'DefinitionStyle'

export const LinkListStyle = styled.ul`
  ${resetList}
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 16rem));
  grid-gap: 1.3rem;
  margin-top: 3rem;
  font-size: 1.3rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
    margin-top: 3.5rem;
    font-size: 1.6rem;
  }
`
LinkListStyle.displayName = 'LinkListStyle'

export const LanguageSelectStyle = styled(Select)`
  margin-top: 3rem;

  @media (min-width: 60em) {
    margin-top: 8rem;
  }
`
LanguageSelectStyle.displayName = 'LanguageSelectStyle'

export const AddressHead = styled.h4`
  margin: 3rem 0 0;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    margin: 4rem 0 0;
    font-size: 2.2rem;
  }
`
AddressHead.displayName = 'AddressHead'

export const AddressHeadHidden = styled.span`
  ${a11yHidden}
`
AddressHeadHidden.displayName = 'AddressHeadHidden'

export const AddressStyle = styled.address`
  margin-top: 2rem;
  font-style: normal;
  font-size: 1.3rem;
  line-height: 2;

  @media (min-width: 60em) {
    margin-top: 1.6rem;
  }
`
AddressStyle.displayName = 'AddressStyle'
