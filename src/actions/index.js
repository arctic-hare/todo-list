import ls from "local-storage";

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SHOW_LOADER = 'SHOW_LOADER'

let nextTodoId = Array.isArray(ls.get('todo-items')) ? ls.get('todo-items').length : 0;

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
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

export const showLoader = (isValue) => {
  return {
    type: SHOW_LOADER,
    isLoading: isValue,
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