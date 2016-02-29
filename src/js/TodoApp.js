import React from 'react'
import TodoItem from './TodoItem'

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Todos</h1>
          <input className="new-todo" placeholder="Text here!" />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
            <TodoItem />
          </ul>

        </section>
      </div>
    )
  }
}

export default TodoApp
