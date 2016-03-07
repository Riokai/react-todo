const initialState = [
  {
    id: Date.now(),
    title: 'Hello Redux',
    checked: false
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'TODO_ADD':
      return [
        {
          id: Date.now(),
          checked: false,
          title: action.text
        },
        ...state
      ]

    case 'TODO_DELETE':
      return state.filter(todo => todo.id !== action.id)

    case 'TODO_TOGGLE':
      return state.map(todo => todo.id === action.id ? Object.assign({}, todo, {checked: !todo.checked}) : todo )

    case 'TODOS_REMOVE_COMPLETE':
      return state.filter(todo => todo.checked === false)

    default:
      return state

  }
}
