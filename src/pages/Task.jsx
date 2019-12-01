import React,{useState} from 'react';
import Input from '../components/Input'
import {editTodo} from '../actions/'
import {useDispatch} from "react-redux";

const createButton = (isChangeTitle) => {
  return isChangeTitle ? (
      <a href="/" className="btn">
        Вернуться к списку
      </a>
  ) : (
      <button type="submit" className="btn">
        Сохранить
      </button>
  )
}

export default function Task(props) {

  const [title, setTitle] = useState(props.title);
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();

    dispatch(editTodo(props.id, title))
    document.location = e.target.getAttribute('href');
  }



  return (
    <form className="container" onSubmit={handleOnSubmit}>
      <h1>Задача №{props.id}</h1>
      <Input
          onChange={setTitle}
          label="Краткое описание"
          initValue={title}
      />
      {createButton(title === props.title)}
    </form>
  );
}