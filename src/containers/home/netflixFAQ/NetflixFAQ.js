import React from 'react'
import { v4 as uuid } from 'uuid'
import faqData from '../../../data/faq.json'
import Accordion from '../../../components/Accordion/index'
import { AppContainer as FAQContainer } from '../../../components'
import {
  FAQHeading,
  FAQButton,
  FAQButtonImage,
  FAQPara,
} from './NetflixFAQ.style'

const NetflixFAQ = () => {
  return (
    <FAQContainer>
      <FAQHeading>자주 묻는 질문</FAQHeading>
      <Accordion>
        {faqData.map(({ question, answer, image }) => {
          return (
            <Accordion.Item key={uuid()} id={uuid()}>
              <Accordion.Head>
                {question}
                <FAQButton type="button">
                  <FAQButtonImage src={image} alt="답변 열림 버튼" />
                </FAQButton>
              </Accordion.Head>
              <Accordion.Body>
                {answer[0] && <p>{answer[0]}</p>}
                {answer[1] ? <p>{answer[1]}</p> : null}
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
      <FAQPara>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </FAQPara>
    </FAQContainer>
  )
}
export default NetflixFAQ
