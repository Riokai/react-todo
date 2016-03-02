class TodoModel {
  constructor() {
    this.data = [{
      id: Date.now(),
      title: 'Hello React',
      checked: false
    }]
  }

  getTodo() {
    return this.data
  }

  addTodo(todo) {
    this.data.push(todo)

    this.render.setState({
      todos: this.data
    })
  }

  setRender(render) {
    this.render = render
  }

  removeTodo(id) {

    this.data = this.data.filter(todo => {
      if (todo.id === id) return false

      return true
    })

    this.render.setState({
      todos: this.data
    })
  }

  toggleTodo(todo) {
    for (let i=0; i<this.data.length; i++) {
      if (this.data[i].id === todo.id) {
        this.data[i].checked = todo.checked
      }
    }

    this.render.setState({
      todos: this.data
    })
  }

  removeCompleted() {
    this.data = this.data.filter((todo) => {
      return !todo.checked
    })


    this.render.setState({
      todos: this.data
    })
  }
}

export default new TodoModel()
