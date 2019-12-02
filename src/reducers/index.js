import {ADD_TODO, EDIT_TODO, FETCH_TODOS, REMOVE_TODO,  SHOW_LOADER, HIDE_LOADER} from '../actions/'

const initialState = {
  items: [],
  isLoading: true
};

const handlers = {
  [SHOW_LOADER]: state => ({...state, isLoading: true}),
  [HIDE_LOADER]: state => ({...state, isLoading: false}),
  [ADD_TODO]: (state, {payload}) => ({
    ...state,
    items: [...state.items, payload]
  }),
  [EDIT_TODO]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    items: state.items.map(item => {
      return item.id === payload.id ? {title: payload.title, id: payload.id}
          : item
    })
  }),
  [FETCH_TODOS]: (state, {payload}) => ({...state, items: payload, isLoading: false}),
  [REMOVE_TODO]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    items: state.items.filter(item => payload.id !== item.id)
  }),
  DEFAULT: state => state
}

export default function (state, action) {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state  === undefined ? initialState: state, action)
}
