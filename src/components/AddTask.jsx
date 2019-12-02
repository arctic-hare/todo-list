import React, {useState} from 'react';
import Input from './Input'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions/'
import PopupContext from '../context/PopupContext';

export default function AddTask() {

  const { popup } = React.useContext(PopupContext);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    axios.post('https://test.megapolis-it.ru/api/list', {title})
    .then(({data}) => {
      dispatch(addTodo(data.id,title));
      popup.closePopup();
    });
  }

  return (<form onSubmit={handleOnSubmit}>
    <Input
        label="Краткое описание"
        initValue={title}
        onChange={setTitle}
        id="add_task"
        required={true}
    />
    <div className="d-flex">
      <button type="submit" className="btn ml-auto">Создать</button>
    </div>
  </form>)

}