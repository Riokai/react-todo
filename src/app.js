require('./style/base.css')
require('./style/index.css')

import React from 'react'
import { render } from 'react-dom'
import TodoApp from './js/TodoApp'

render(
  <TodoApp />,
  document.getElementById('app')
)
