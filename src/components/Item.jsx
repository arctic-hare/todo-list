import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, showLoader} from '../actions/'
import axios from "axios";
import {A} from 'hookrouter';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Item(props) {

  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(showLoader())
    axios.delete('https://test.megapolis-it.ru/api/list/' + props.id, )
    .then(({data}) => {
      dispatch(removeTodo(props.id));
    });
  }
  console.log('render', props.id);
  return (
      <div className="todo-item">
        <div className="todo-item__id"><span>Задача</span> №{props.id}</div>
        <div className="todo-item__title">{props.title}</div>
        <div className="todo-item__control">
          <A href={`/${props.id}`} className="todo-item__edit">
            <span className="i-edit"></span>
          </A>
          <button type="button" className="todo-item__remove"
                  onClick={handleOnClick}
          >
            <span className="i-remove"></span>
          </button>
        </div>
      </div>
  );
}