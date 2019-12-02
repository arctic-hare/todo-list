import React, {useState} from 'react';
import Input from '../components/Input'
import {editTodo, removeTodo, showLoader} from '../actions/'
import {useDispatch} from "react-redux";
import {navigate, A} from 'hookrouter';
import api from '../api/'

const createButton = (isChangeTitle) => {
  return isChangeTitle ? (
      <A href="/" className="btn btn-info">
        Вернуться к списку
      </A>
  ) : (
      <button type="submit" className="btn">
        Сохранить
      </button>
  )
}

export default function Task(props) {

  const [title, setTitle] = useState(props.title);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(showLoader())
    api.deleteTodo(props.id)
    .then(() => {
      dispatch(removeTodo(props.id));
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(showLoader())

    api.editTodo(props.id, {title})
    .then(() => {
      dispatch(editTodo(props.id, title))
      navigate('/')
    });
  }

  return (

      <form onSubmit={handleOnSubmit}>
        <div className="d-flex mb-4">
          <h1>Задача №{props.id}</h1>
          <button type="button"
                  className="btn btn-danger ml-auto"
                  onClick={handleOnClick}
          >
            Удалить
          </button>
        </div>
        <Input
            onChange={setTitle}
            label="Краткое описание"
            initValue={title}
            style={{maxWidth: '400px'}}
            required={true}
        />
        {createButton(title === props.title)}
      </form>
  );
}