export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

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

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
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