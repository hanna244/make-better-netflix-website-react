import React from 'react'
import { v4 as uuid } from 'uuid'
import faqData from '../../../data/faq.json'
import Accordion from '../../../components/Accordion/index'

const NetflixFAQ = () => {
  return (
    <Accordion>
      {faqData.map(({ question, answer }) => {
        return (
          <Accordion.Item key={uuid()} id={uuid()}>
            <Accordion.Head>{question}</Accordion.Head>
            {answer[0] && <Accordion.Body>{answer[0]}</Accordion.Body>}
            {answer[1] ? <Accordion.Body>{answer[1]}</Accordion.Body> : null}
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
export default NetflixFAQ
