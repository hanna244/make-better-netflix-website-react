import React from 'react'
import { v4 as uuid } from 'uuid'
import faqData from '../../../data/faq.json'
import {
  AppContainer as FAQContainer,
  Accordion,
  NetflixForm,
} from '../../../components'
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
        {faqData.map(({ question, answer, image }, index) => {
          return (
            <Accordion.Item key={uuid()} id={uuid()}>
              <Accordion.Head>
                {question}
                <FAQButton type="button">
                  <FAQButtonImage src={image} alt="답변 열림 버튼" />
                </FAQButton>
              </Accordion.Head>
              {question.index === answer.index ? (
                <Accordion.Body>
                  {answer[0] && <p>{answer[0]}</p>}
                  {answer[1] ? <p>{answer[1]}</p> : null}
                </Accordion.Body>
              ) : null}
            </Accordion.Item>
          )
        })}
      </Accordion>
      <FAQPara>
        {/* 해당 텍스트도 json 데이터로 만드는 것이 좋을까..?  */}
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </FAQPara>
      <NetflixForm forAndId="Email">
        <NetflixForm.Label>이메일 주소</NetflixForm.Label>
        <NetflixForm.Input>입력하세요</NetflixForm.Input>
      </NetflixForm>
    </FAQContainer>
  )
}
export default NetflixFAQ
