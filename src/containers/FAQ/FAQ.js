import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { Accordion } from 'components'

import { useSelector, useDispatch } from 'react-redux'
import { currentNumber } from 'store/slices/faqslice'
import { List } from './FAQ.style'

const FAQ = ({ as, label, children, ...restProps }) => {
  // 데이터 비동기 통신으로 받아오기
  const [faqData, setFaqData] = useState([])
  const fetchData = useCallback(() => {
    import('data/faq.json')
      .then((data) => {
        const { default: _default } = data
        setFaqData(_default)
      })
      .catch((error) => console.error('데이터를 받아오는데 실패했습니다.'))
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // 스토어에서 상태 가져오기
  const { currentIndex } = useSelector((state) => {
    return {
      currentIndex: state.curious.currentIndex,
    }
  })
  // dispatch를 통해 액션 실행
  const dispatch = useDispatch()
  const changeIndex = (index) => dispatch(currentNumber(index))

  const handleAccordionStateandIndex = (index) => {
    changeIndex(index === currentIndex ? null : index)
  }

  return (
    <Fragment>
      <List {...restProps}>
        {faqData.map((item, index) => (
          <Accordion
            key={`Accordion_${index}`}
            // Accordion open/close 조건 처리를 위해 Accordion_index가 아닌 index로 전달
            id={index}
            question={item.question}
            answer={item.answer}
            onClick={() => handleAccordionStateandIndex(index)}
            currentIndex={currentIndex}
            isOpen={index === currentIndex ? true : false}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default FAQ
