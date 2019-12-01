import React from "react";
import List from "./pages/List";
import Item from "./pages/Task";
import ls from "local-storage";

function getItem(id) {

  return ls.get('todo-items').find(item => +item.id === +id)
}

export default {
  '/': () => <List />,
  '/:id': ({id}) => {
    let result = null;

    const item = getItem(id);

    if(item) {
      result = <Item id={+id} title={item.title} />
    }
      return result
  },
};