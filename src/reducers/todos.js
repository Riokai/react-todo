import { createReducer } from '../utils'

const initialState = [
  {
    id: Date.now(),
    title: 'Hello Redux',
    checked: false
  }
]

export default createReducer({
  'TODO_ADD': (state, action) => {
    if (!action.text) return state

    return [
      {
        id: Date.now(),
        checked: false,
        title: action.text
      },
      ...state
    ]
  },
  'TODO_DELETE': (state, action) => state.filter(todo => todo.id !== action.id),
  'TODO_TOGGLE': (state, action) => state.map(todo => todo.id === action.id ? Object.assign({}, todo, {checked: !todo.checked}) : todo ),
  'TODOS_REMOVE_COMPLETE': (state, action) => state.filter(todo => todo.checked === false),
  'TODOS_COMPLETE_ALL': (state, action) => state.map(todo => {
    todo.checked = true

    return todo
  })
}, initialState)
