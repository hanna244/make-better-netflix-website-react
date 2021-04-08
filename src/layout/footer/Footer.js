import React, { Fragment } from 'react'
import { v4 as uuid } from 'uuid'

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

import footerLinkData from '../../data/footerLink.json'
import addressData from '../../data/address.json'

const Footer = ({ ...restProps }) => {
  // JSON 데이터 동적 import
  // const [linkData, setLinkData] = useState('')

  // const fetchData = () => {
  //   import('../../data/footerLink.json')
  //     .then((data) => setLinkData(data))
  //     .catch((error) => console.error('데이터를 불러오는 것에 실패했습니다.'))
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // console.log(linkData)
  // console.log(linkData.default)

  return (
    <FooterStyle {...restProps}>
      <p>질문이 있으신가요? &nbsp;</p>
      <br className="linkBreak" />
      <DefinitionStyle
        dtContext="문의 전화"
        ddContext="00-308-321-0058"
        telLink
      >
        테스트 입니다.
      </DefinitionStyle>
      <LinkListStyle>
        {footerLinkData.map((item) =>
          item.abbr ? (
            <LinkListItem
              label={
                <>
                  {item.link}
                  {/* abbr 렌더링 되지 않음  */}
                  <abbr title={item.abbrTitle}>{item.abbr}</abbr>
                </>
              }
              key={uuid()}
              id={uuid()}
              href="/"
            />
          ) : (
            <LinkListItem label={item.link} key={uuid()} id={uuid()} href="/" />
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
        {addressData.map((item) => (
          <Fragment key={uuid()}>
            {item.email ? (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={uuid()}
                emailLink
              />
            ) : item.tel ? (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={uuid()}
                telLink
              />
            ) : (
              <Definition
                dtContext={item.title}
                ddContext={item.content}
                id={uuid()}
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
