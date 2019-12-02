import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, showLoader} from '../actions/'
import {A} from 'hookrouter';
import api from "../api";

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
    api.deleteTodo(props.id)
    .then(() => {
      dispatch(removeTodo(props.id));
    });
  }

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