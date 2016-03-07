import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // console.log('checked', this.state.todo.checked);
    const { todo, deleteTodo, toggleTodo } = this.props

    return (
      <li className={todo.checked ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={ () => toggleTodo(todo.id) }
            checked={ todo.checked } />
          <label>{ todo.title }</label>
          <button className="destroy" style={{cursor: 'pointer'}} onClick={() => {deleteTodo(todo.id)}}></button>
        </div>
      </li>
    )
  }
}

export default TodoItem
