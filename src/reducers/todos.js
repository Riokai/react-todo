const initialState = [
  {
    id: Date.now(),
    title: 'Hello React',
    checked: false
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case '111':

      break;
    default:
      return state

  }
}
