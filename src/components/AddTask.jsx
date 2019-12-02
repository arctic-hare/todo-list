import React, {useState} from 'react';
import Input from './Input'
import {useDispatch} from 'react-redux'
import api from '../api/'
import {addTodo} from '../actions/'
import PopupContext from '../context/PopupContext';

export default function AddTask() {

  const { popup } = React.useContext(PopupContext);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    api.addTodo({title})
    .then(({id}) => {
      dispatch(addTodo(id, title));
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