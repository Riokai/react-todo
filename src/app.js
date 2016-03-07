require('./style/base.css')
require('./style/index.css')

import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
import { Provider } from 'react-redux'
import configureStore from './store/index'

const store = configureStore()

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)
