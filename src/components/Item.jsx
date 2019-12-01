import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo} from '../actions/'

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Item(props) {

  const dispatch = useDispatch();

  function deleteTask() {


    /* fetch('https://test.megapolis-it.ru/api/list/' + props.id, { method: 'DELETE'})
     .then(()=> {
       //setItems(items.filter(item => item.id !== id));
     })*/

  }

  function handleOnClick() {
    dispatch(removeTodo(props.id));
  }
  console.log('render', props.id);
  return (
      <div className="todo-item">
        <div className="todo-item__id">Задача №{props.id + 1}</div>
        <div className="todo-item__title">{props.title}</div>
        <div className="todo-item__control">
          <a href={`/${props.id}`} className="todo-item__edit">
            <span className="i-edit"></span>
          </a>
          <button type="button" className="todo-item__remove"
                  onClick={handleOnClick}
          >
            <span className="i-remove"></span>
          </button>
        </div>
      </div>
  );
}