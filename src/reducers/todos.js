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
    default:
      return state

  }
}
