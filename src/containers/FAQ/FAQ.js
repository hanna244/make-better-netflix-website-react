import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'
import faqData from '../../data/faq.json'

import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../store/slices/faqslice'

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

  const curious = useSelector((state) => state.curious)

  console.log(curious)

  return (
    <Fragment>
      <article {...restProps}>
        {faqData.map((item) => (
          <Accordion
            key={uuid()}
            id={uuid()}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </article>
    </Fragment>
  )
}

export default FAQ
