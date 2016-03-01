import React from 'react'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'

const data = [
  {
    title: 1,
    checked: false
  },
  {
    title: 2,
    checked: true
  }
]

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input className="new-todo" placeholder="Text here!" />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
            { data.map((item, index) => {
              return <TodoItem todo={item} key={index} />
            }) }
          </ul>

        </section>
        <TodoFooter />
      </div>
    )
  }
}

export default TodoApp
