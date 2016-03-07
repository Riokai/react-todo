import React from 'react'

class TodoFooter extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { removeCompleted } = this.props
    
    return (
      <footer className="footer">
        <span className="todo-count">
          <span>剩余 </span>
          <strong>{ this.props.numbers }</strong>
          <span> 项待办</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">全部</a>
          </li>
          <span> </span>
          <li>
            <a href="#/active">当前</a>
          </li>
          <span> </span>
          <li>
            <a href="#/completed">已完成</a>
          </li>
        </ul>
        {
          this.props.completedCount > 0 ? (
            <button
              className="clear-completed"
              onClick={() => removeCompleted()}>清除完成</button>
          ) : ''
        }
      </footer>
    )
  }
}

export default TodoFooter
