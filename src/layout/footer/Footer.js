import React, { Fragment, useState, useEffect } from 'react'
import { Definition, LinkListItem } from './compound_components'
import {
  FooterStyle,
  DefinitionStyle,
  LinkListStyle,
  AddressHead,
  AddressStyle,
  LanguageSelectStyle,
  AddressHeadHidden,
} from './Footer.style'

const Footer = ({ ...restProps }) => {
  /* JSON 데이터 동적 import ------------------------------------------------------- */

  const [footerLinkData, setFooterLinkData] = useState([])
  const [addressData, setAddressData] = useState([])

  const fetchAddressData = () => {
    import('data/address.json')
      .then((data) => {
        const { default: _default } = data
        setAddressData(_default)
      })
      .catch((error) => console.error('address 데이터를 불러오지 못했습니다.'))
  }
  const fetchFooterLinkData = () => {
    import('data/footerLink.json')
      .then((data) => {
        const { default: _default } = data
        setFooterLinkData(_default)
      })
      .catch((error) => console.error('address 데이터를 불러오지 못했습니다.'))
  }

  useEffect(() => {
    fetchAddressData()
    fetchFooterLinkData()
  }, [])

  return (
    <FooterStyle {...restProps}>
      <p>질문이 있으신가요? &nbsp;</p>
      <br className="linkBreak" />
      <DefinitionStyle
        dtContext="문의 전화"
        ddContext="00-308-321-0058"
        telLink
      />
      <LinkListStyle>
        {footerLinkData.map((item, index) =>
          item.abbr ? (
            <LinkListItem
              label={
                <>
                  {item.link}
                  <abbr title={item.abbrTitle}>{item.abbr}</abbr>
                </>
              }
              key={`footer_link_${index}`}
              id={`footer_link_${index}`}
              href="/"
            />
          ) : (
            <LinkListItem
              label={item.link}
              key={`footer_link_${index}`}
              id={`footer_link_${index}`}
              href="/"
            />
          )
        )}
      </LinkListStyle>
      <LanguageSelectStyle
        id="language_select"
        // potionList 객체는 Footer 컴포넌트 아래 정의되어 있음
        optionList={Footer.List}
        label="언어 선택"
        a11yLabel
      />
      <AddressHead as="h2">
        Netflix 대한민국<AddressHeadHidden> 연락정보</AddressHeadHidden>
      </AddressHead>
      <AddressStyle>
        <span>넷플릭스서비시스코리아 유한회사</span>
        <br />
        {addressData.map((item, index) => (
          <Fragment key={`address_${index}`}>
            {item.email ? (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={`address_${index}`}
                emailLink
              />
            ) : item.tel ? (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={`address_${index}`}
                telLink
              />
            ) : (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={`address_${index}`}
              />
            )}
            <br />
          </Fragment>
        ))}
        <span>
          <a
            href="https://www.ftc.go.kr/www/bizCommView.do?key=232&apv_perm_no=2018300016930200431&pageUnit=10&searchCnd=bup_nm&searchKrwd=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&pageIndex=1"
            rel="noreferrer"
            target="_blank"
          >
            공정거래위원회 통신 판매사업자 정보 보기
          </a>
        </span>
      </AddressStyle>
    </FooterStyle>
  )
}

Footer.List = [
  { label: '한국어', value: 'korean', selected: 'selected' },
  { label: 'English', value: 'english' },
]

export default Footer
