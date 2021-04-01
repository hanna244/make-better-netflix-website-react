import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { inputReducer } from './slices/inputslice'

const rootReducer = combineReducers({
  formReducer: inputReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
