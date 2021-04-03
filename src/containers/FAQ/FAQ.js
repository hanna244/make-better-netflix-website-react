import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'
import faqData from '../../data/faq.json'

import { useSelector, useDispatch } from 'react-redux'
import { currentNumber, accordionIsOpen } from '../../store/slices/faqslice'

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

  const { currentIndex, isOpen } = useSelector((state) => {
    return {
      currentIndex: state.curious.currentIndex,
      isOpen: state.curious.isOpen,
    }
  })

  const dispatch = useDispatch()
  const changeIndex = (index) => dispatch(currentNumber(index))
  const changeOpenState = () => dispatch(accordionIsOpen())

  const handleAccordionStateandIndex = (index) => {
    changeOpenState()
    changeIndex(index === currentIndex ? 0 : index)
  }

  return (
    <Fragment>
      <List {...restProps}>
        {faqData.map((item, index) => (
          <Accordion
            key={uuid()}
            id={index}
            question={item.question}
            answer={item.answer}
            onClick={() => handleAccordionStateandIndex(index)}
            currentIndex={currentIndex}
            isOpen={isOpen}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default FAQ
