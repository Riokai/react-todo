export function addTodo(text) {
  return { type: 'TODO_ADD', text }
}

export function deleteTodo(id) {
  return { type: 'TODO_DELETE', id }
}

export function toggleTodo(id) {
  return { type: 'TODO_TOGGLE', id }
}

export function removeCompletedTodos() {
  return { type: 'TODOS_REMOVE_COMPLETE' }
}
