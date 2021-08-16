import { v1 as uuid } from 'uuid';



export const actionTypes = {
  ADD_TODO: "ADD_TODO" ,
  TOGGLE_TODO: "TOGGLE_TODO" ,
  SET_FILTER : "SET_FILTER"
}

export const addTodo = (title) => ({
  type: actionTypes.ADD_TODO,
  id: uuid(),
  title:title
})

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id:id
  })

export const setFilter = (filter) => ({
  type: actionTypes.SET_FILTER,
  filter:filter
})



export const filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_INCOMPLETE: "SHOW_INCOMPLETE"
}

