import React, {useState, useContext} from 'react';
import Input from './Input'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions/'
import PopupContext from '../context/PopupContext';

export default function AddTask(props) {

  const { popup } = React.useContext(PopupContext);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(addTodo(title));
    popup.closePopup();
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    /*const data = {title};
    axios.post('https://test.megapolis-it.ru/api/list', data)
    .then(({data}) => props.addItem(data.id, title));*/

    onAddTodo();
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
      <button type="submit" className="btn ml-auto">создать</button>
    </div>
  </form>)

}