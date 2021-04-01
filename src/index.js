import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'

import { GlobalStyles } from './styles/GlobalStyles'
import './styles/normalize.css'
import App from './App/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// 서비스 워커 설정
if (process.env.NODE_ENV === 'production') {
  import('./serviceWorker')
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message))
}
