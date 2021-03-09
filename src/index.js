import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import './styles/normalize.css'
import { GlobalStyles } from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// 서비스 워커 설정
if (process.env.NODE_ENV === 'production') {
  import('./serviceWorker')
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message))
}
