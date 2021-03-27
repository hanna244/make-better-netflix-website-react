import React from 'react'
import { Definition, LinkList } from './compound_components'
import { FooterStyle } from './Footer.style'

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
      <LinkList />
    </FooterStyle>
  )
}

export default Footer
