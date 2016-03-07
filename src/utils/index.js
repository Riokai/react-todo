export function createReducer(obj, initialState) {
  return (state = initialState, action) => {
    for (let key in obj) {
      if (key === action.type) return obj[key](state, action)
    }

    return state
  }
}
