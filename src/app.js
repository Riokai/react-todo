require('./style/base.css')
require('./style/index.css')

import React from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'
import configureStore from './store/index'

const store = configureStore()

render(
  <Provider store={store} >
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
