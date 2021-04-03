import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'
import faqData from '../../data/faq.json'

import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../store/slices/faqslice'

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

  // const [faqData, setFaqData] = useState({})

  const curious = useSelector((state) => state.curious.isOpen)
  console.log(curious)

  const dispatch = useDispatch()

  const answerOpen = () => dispatch(open())
  const answerClose = () => dispatch(close())

  const handleToggle = (e) => {
    !curious ? answerOpen() : answerClose()
    const idNum = e.target.id
    const accordionNode = e.target.closest('.accordionItem')
    console.log(idNum)
    console.log(accordionNode.id)
    console.log(accordionNode.lastElementChild)
    if (accordionNode.id === idNum) {
      accordionNode.lastElementChild.style.cssText = 'display: none'
    }
  }

  return (
    <Fragment>
      <List {...restProps} onClick={handleToggle}>
        {faqData.map((item, index) => (
          <Accordion
            key={uuid()}
            id={index}
            question={item.question}
            answer={item.answer}
            handleToggle={handleToggle}
            isOpen={curious}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default FAQ
