import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import { FormContainer, Title, UserInfo, Message } from './NetflixForm.style'
import './labelState.scss'

// forAndId 속성을 자식 컴포넌트에 전달하기 위해서 context 사용
const FormContext = createContext()

const NetflixForm = ({ forAndId, children, ...restProps }) => {
  const ref = useRef(null)
  const [formClass, setInputClass] = useState(null)
  useEffect(() => {
    const formNode = ref.current
    console.log(formNode)

    const handleInput = (e) => {
      e.target.matches(':invalid')
        ? setInputClass('invalidState')
        : setInputClass('validState')

      e.target.value.trim().length === 0 ?? setInputClass(null)
      // console.log(e.target) : input
      // console.log(e.currentTarget) : div(NetflixForm)
    }

    formNode.addEventListener('input', handleInput)
  }, [])
  return (
    // value={{ forAndId: forAndId }} → 향상된 객체 표기법으로 변경
    <FormContext.Provider value={{ forAndId }}>
      <FormContainer ref={ref} className={formClass} {...restProps}>
        {children}
      </FormContainer>
    </FormContext.Provider>
  )
}

NetflixForm.Label = function NetflixFormLabel({
  a11y,
  children,
  ...restProps
}) {
  const context = useContext(FormContext)
  const { forAndId } = context

  return (
    <Title htmlFor={forAndId} a11y={a11y} {...restProps}>
      {children}
    </Title>
  )
}
NetflixForm.Input = function NetflixFormInput({
  children,
  name,
  type,
  ...restProps
}) {
  const [inputValue, setInputValue] = useState('')
  const context = useContext(FormContext)
  const { forAndId } = context

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <UserInfo
      onChange={handleChange}
      value={inputValue}
      type={type}
      id={forAndId}
      name={name}
      {...restProps}
      placeholder={children}
    />
  )
}
NetflixForm.Message = function NetflixFormMessage({ children, ...restProps }) {
  return (
    <Message role="alert" {...restProps}>
      {children}
    </Message>
  )
}

/* 속성 검사 ---------------------------------------------------- */
NetflixForm.propTypes = {
  forAndId: PropTypes.string.isRequired,
}
NetflixForm.Input.propTypes = {
  type: PropTypes.string.isRequired,
}
NetflixForm.Message.propTypes = {
  children: PropTypes.string.isRequired,
}

export default NetflixForm
