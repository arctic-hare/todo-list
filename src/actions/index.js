import {ADD_TODO, EDIT_TODO, FETCH_TODOS, REMOVE_TODO,  SHOW_LOADER} from '../actions/actionsType'


export const fetchTodos = (items) => {
  return {
    type: FETCH_TODOS,
    payload: items
  }
}

export const addTodo = (id, title) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      title
    }
  }
}

export const editTodo = (id, title) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title
    }
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
    payload: {},
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}