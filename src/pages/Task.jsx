import React, {useState} from 'react';
import Input from '../components/Input'
import {editTodo, hideLoader, showLoader} from '../actions/'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {navigate, A} from 'hookrouter';

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
  const item = useSelector(state => state.items).find(
      item => +item.id === +props.id)

  if (!item) {
    navigate('/')
  }

  const [title, setTitle] = useState(item.title);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(showLoader())
    axios.delete('https://test.megapolis-it.ru/api/list/' + props.id, )
    .then(({data}) => {
      dispatch(hideLoader(props.id));
      navigate('/')
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(showLoader())

    axios.post('https://test.megapolis-it.ru/api/list/' + props.id, {title})
    .then(({data}) => {
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
        {createButton(title === item.title)}
      </form>
  );
}