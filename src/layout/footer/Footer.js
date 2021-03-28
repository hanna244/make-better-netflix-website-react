import React, { Fragment, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Definition, LinkListItem } from './compound_components'
import {
  FooterStyle,
  DefinitionStyle,
  LinkListStyle,
  AddressHead,
  AddressStyle,
} from './Footer.style'
// import footerLinkData from '../../data/footerLink.json'
import addressData from '../../data/address.json'

const Footer = ({ ...restProps }) => {
  const [linkData, setLinkData] = useState('')

  const fetchData = () => {
    import('../../data/footerLink.json')
      .then((data) => setLinkData(data))
      .catch((error) => console.error('데이터를 불러오는 것에 실패했습니다.'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(asadsdsad)
  console.log(linkData.default)
  return (
    <FooterStyle {...restProps}>
      <p>질문이 있으신가요? &nbsp;</p>
      <br className="linkBreak" />
      <DefinitionStyle
        link
        href="tel:+003083210058"
        dtContext="문의 전화"
        ddContext="00-308-321-0058"
      >
        테스트 입니다.
      </DefinitionStyle>
      <LinkListStyle>
        {linkData.default.map((item) => (
          <LinkListItem
            label={item.link}
            key={uuid()}
            id={uuid()}
          ></LinkListItem>
        ))}
      </LinkListStyle>
      <AddressHead>Netflix 대한민국</AddressHead>
      <AddressStyle>
        <span>넷플릭스서비시스코리아 유한회사</span>
        <br />
        {addressData.map((item) => (
          <Fragment key={uuid()}>
            <Definition
              dtContext={item.title}
              ddContext={item.content}
              id={uuid()}
            />
            <br />
          </Fragment>
        ))}

        <span>공정거래위원회 통신 판매사업자 정보 보기</span>
      </AddressStyle>
    </FooterStyle>
  )
}

export default Footer
