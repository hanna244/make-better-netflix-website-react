import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { Accordion } from '../../components'

const FAQ = ({ as, label, children, ...restProps }) => {
  const fetchData = useCallback(() => {
    import('../../data/faq.json')
      .then((data) => {
        const { default: _default } = data
        setFaqData(_default)
      })
      .catch((error) => console.error('데이터를 받아오는데 실패했습니다.'))
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const [faqData, setFaqData] = useState({})

  return (
    <Fragment>
      <article {...restProps}>
        {faqData.map((item) => (
          <Accordion question={item.question} answer={item.answer} />
        ))}
      </article>
    </Fragment>
  )
}

export default FAQ
