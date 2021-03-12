import React from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import faqData from '../../../data/faq.json'
import Accordion from '../../../components/Accordion/index'
import { ContainerStyle as FAQContainer } from '../../../components'

const Heading = styled.h2`
  margin-top: 6rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    margin-top: 5.4rem;
    font-size: 4.8rem;
  }
`

const NetflixFAQ = () => {
  return (
    <FAQContainer>
      <Heading>자주 묻는 질문</Heading>
      <Accordion>
        {faqData.map(({ question, answer }) => {
          return (
            <Accordion.Item key={uuid()} id={uuid()}>
              <Accordion.Head>{question}</Accordion.Head>
              <Accordion.Body>
                {answer[0] && <p>{answer[0]}</p>}
                {answer[1] ? <p>{answer[1]}</p> : null}
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </FAQContainer>
  )
}
export default NetflixFAQ
