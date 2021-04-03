import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'
import faqData from '../../data/faq.json'

import { useSelector, useDispatch } from 'react-redux'
import { open, close, currentNumber } from '../../store/slices/faqslice'

import { List } from './FAQ.style'

const FAQ = ({ as, label, children, ...restProps }) => {
  // const fetchData = useCallback(() => {
  //   import('../../data/faq.json')
  //     .then((data) => {
  //       const { default: _default } = data
  //       setFaqData(_default)
  //     })
  //     .catch((error) => console.error('데이터를 받아오는데 실패했습니다.'))
  // })

  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  const currentIndex = useSelector((state) => state.curious.currentIndex)

  console.log(currentIndex)

  const dispatch = useDispatch()

  const changeIndex = (index) => dispatch(currentNumber(index))

  // const [currentIndex, setCurrentIndex] = useState(null)

  return (
    <Fragment>
      <List {...restProps}>
        {faqData.map((item, index) => (
          <Accordion
            key={uuid()}
            id={index}
            question={item.question}
            answer={item.answer}
            onClick={() => changeIndex(index === currentIndex ? null : index)}
            currentIndex={currentIndex}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default FAQ
