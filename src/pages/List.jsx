import React from 'react';
import {useSelector} from "react-redux";
import Item from '../components/Item';
import BtnPopup from "../components/BtnPopup";
import AddTask from "../components/AddTask";

 function List() {
  const items = useSelector(state => state.items)

  return (
    <>
      <div className="d-flex mb-4">
        <h1 className="m-0">Список задач</h1>
        <BtnPopup btnText="Добавить" modifier="popup--add-task">
          <AddTask />
        </BtnPopup>
      </div>
      {items.length > 0 ? (
          <div className="list">
            {items.map(item => {
              return <Item {...item} key={item.id} />
            })}
          </div>
      ) : (
          <span>Нет дел</span>
          )
      }
    </>
  );
}

export default List;