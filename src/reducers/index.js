import {ADD_TODO, EDIT_TODO, FETCH_TODOS, REMOVE_TODO,  SHOW_LOADER} from '../actions/'
import ls from "local-storage";

/*export  function todoApp2 (state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      const newState = Object.assign({}, state, {
        items: state.items.concat({title: action.title, id: action.id})
      });
      ls.set('todo-items', newState.items);

      return newState

    case EDIT_TODO:
      console.log('action', action);
      return Object.assign({}, state, {
        items: state.items.map(item => {
          return item.id === action.id ? {title: action.title, id: action.id}
              : item
        })
      });

    case SHOW_LOADER:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })
    default:
      console.log('newState', state);
      return state
  }
}*/

const initialState = {
  items: ls.get('todo-items') || [],
  isLoading: false
};
console.log('initialState', initialState);

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_TODO]: (state, {payload}) => ({
    ...state,
    items: [...state.items, payload]
  }),
  [EDIT_TODO]: (state, {payload}) => ({
    ...state,
    items: state.items.map(item => {
      return item.id === payload.id ? {title: payload.title, id: payload.id}
          : item
    })
  }),
  [FETCH_TODOS]: (state, {payload}) => ({...state, items: payload, loading: false}),
  [REMOVE_TODO]: (state, {payload}) => ({
    ...state,
    items: state.items.filter(item => payload.id !== item.id)
  }),
  DEFAULT: state => state
}

export default function (state, action) {
  const handle = handlers[action.type] || handlers.DEFAULT


  const newState = handle(state  === undefined ? initialState: state, action)
  console.log('newState', newState);
  ls.set('todo-items', newState.items);
  return newState
}
