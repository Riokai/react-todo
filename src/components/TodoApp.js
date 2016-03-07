import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
// import TodoModel from './TodoModel'

const ENTER_KEY = 13;
const ALL_TODOS = 'all'
const ACTIVE_TODOS = 'active'
const COMPLETED_TODOS = 'completed'

class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleNewTodo(e) {
    if (e.keyCode !== ENTER_KEY) return

    e.preventDefault()

    // TodoModel.addTodo({
    //   title: this.state.newTodo,
    //   checked: false,
    //   id: Date.now()
    // })

    this.props.actions.addTodo(this.state.newTodo)

    this.state.newTodo = ''
  }

  render() {

    const { todos, actions } = this.props

    let number = todos.filter((todo) => todo.checked === false).length
    let completedCount = todos.filter((todo) => todo.checked === true).length

    return (
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input
            className="new-todo"
            placeholder="新增待办事项！"
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleNewTodo.bind(this)}
            value={this.state.newTodo} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
            { todos.map((todo, index) =>
                <TodoItem todo={todo} key={index} {...actions} />
            )}
          </ul>

        </section>
        <TodoFooter numbers={ number } completedCount={completedCount} removeCompleted={actions.removeCompletedTodos} />
      </div>
    )
  }
}

TodoApp.proTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


export default TodoApp
