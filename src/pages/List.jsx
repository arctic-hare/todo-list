import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import Item from '../components/Item';
import BtnPopup from "../components/BtnPopup";
import AddTask from "../components/AddTask";

 function List(props) {
  const items = useSelector(state => state.items)

  useEffect(() => {
    //this.props.fetchData();
  }, []);

   console.log('render List');
  return (
    <div className="container">
      <div className="d-flex mb-4">
        <h1 className="m-0">Список задач</h1>
        <BtnPopup btnText="Добавить" modifier="popup--add-task">
          <AddTask />
        </BtnPopup>
      </div>
      <div className="list">
        {items.map(item => {
          return <Item {...item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default List;