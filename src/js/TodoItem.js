import React from 'react'

class TodoItem extends React.Component {

  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>123</label>
          <button className="destroy"></button>
        </div>
      </li>
    )
  }

}

export default TodoItem
