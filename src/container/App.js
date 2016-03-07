import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActions from '../actions'

import TodoApp from '../components/TodoApp'
import DevTools from './DevTools'

class App extends Component {
  render() {

    const { todos, actions } = this.props

    return (
      <div>
        <TodoApp todos={todos} actions={actions} />
        <DevTools />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
