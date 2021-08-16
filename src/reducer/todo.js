import { actionTypes } from "../actions"

const todo = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            isCompleted: false
          }
        ]
      case actionTypes.TOGGLE_TODO:
        return state.map((todo) =>
          (todo.id === action.id)
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todo
  