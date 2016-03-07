import React from 'react'

import TodoModel from './TodoModel'

class TodoItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todo: this.props.todo
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      todo: nextProps.todo
    }
  }

  removeTodo() {
    TodoModel.removeTodo(this.props.todo.id)
  }

  handleChange(e) {

    this.setState({
      todo: Object.assign(this.state.todo, {checked: !this.state.todo.checked})
    })

    TodoModel.toggleTodo(this.state.todo)
  }

  render() {
    // console.log('checked', this.state.todo.checked);

    return (
      <li className={this.state.todo.checked ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.handleChange.bind(this)}
            checked={this.state.todo.checked} />
          <label>{this.props.todo.title}</label>
          <button className="destroy" style={{cursor: 'pointer'}} onClick={this.removeTodo.bind(this)}></button>
        </div>
      </li>
    )
  }
}

export default TodoItem
