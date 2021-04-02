import { useCallback } from 'react'
import { Defualt } from '../../layout/LayoutTypes/Defualt'
import { OurStory, Merit, FAQ } from '../../containers/index'
import { useSelector, useDispatch } from 'react-redux'
import {
  valueUpdate,
  lengthZeroAction,
  invalidAction,
  validAction,
} from '../../store/slices/inputslice'

function Home() {
  // 스토어에서 상태 가져오기
  const { inputValue, inputDetect } = useSelector(({ formReducer }) => ({
    inputValue: formReducer.email,
    inputDetect: formReducer.detect,
  }))

  // 스토어에서 액션 가져오기
  const dispatch = useDispatch()

  const updateInputValue = useCallback(() => dispatch(valueUpdate()), [])
  const zoroState = useCallback(() => dispatch(lengthZeroAction()), [])
  const invalidState = useCallback(() => dispatch(invalidAction()), [])
  const validState = useCallback(() => dispatch(validAction()), [])

  const handleChange = ({ target: { value, name } }) => {
    updateInputValue(value, name)
  }

  return (
    <Defualt className="home">
      <OurStory
        promotionprop={{
          handleChange: handleChange,
          value: inputValue,
        }}
      />
      <Merit />
      <FAQ />
    </Defualt>
  )
}

export default Home
