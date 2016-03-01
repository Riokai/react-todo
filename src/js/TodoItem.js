import React from 'react'

class TodoItem extends React.Component {

  render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.todo.checked} />
          <label>{this.props.todo.title}</label>
          <button className="destroy"></button>
        </div>
      </li>
    )
  }
}

export default TodoItem
