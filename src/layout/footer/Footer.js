import React from 'react'
import { v4 as uuid } from 'uuid'
import { Definition, LinkListItem } from './compound_components'
import { FooterStyle } from './Footer.style'
import footerLinkData from '../../data/footerLink.json'

const Footer = ({ ...restProps }) => {
  return (
    <FooterStyle {...restProps}>
      <p>질문이 있으신가요?</p>
      <Definition
        link
        href="tel:+003083210058"
        dtContext="문의 전화"
        ddContext="00-308-321-0058"
      />
      <ul>
        {footerLinkData.map((item) => (
          <LinkListItem
            label={item.link}
            key={uuid()}
            id={uuid()}
          ></LinkListItem>
        ))}
      </ul>
    </FooterStyle>
  )
}

export default Footer
