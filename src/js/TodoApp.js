import React from 'react'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import TodoModel from './TodoModel'

const ENTER_KEY = 13;
const ALL_TODOS = 'all'
const ACTIVE_TODOS = 'active'
const COMPLETED_TODOS = 'completed'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    TodoModel.setRender(this)

    this.state = {
      todos: TodoModel.getTodo(),
      nowShowing: ALL_TODOS,
			editing: null,
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

    TodoModel.addTodo({
      title: this.state.newTodo,
      checked: false,
      id: Date.now()
    })

    this.state.newTodo = ''
  }

  render() {

    let number = this.state.todos.filter((todo) => {
      return todo.checked === false
    }).length

    let completedCount = this.state.todos.filter((todo) => {
      return todo.checked === true
    }).length

    // console.log('count', completedCount)

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
            { this.state.todos.map((item, index) => {
                return <TodoItem todo={item} key={index} />
            }) }
          </ul>

        </section>
        <TodoFooter numbers={ number } completedCount={completedCount} />
      </div>
    )
  }
}

export default TodoApp
