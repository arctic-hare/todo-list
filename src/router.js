import React from "react";
import List from "./pages/List";
import Item from "./pages/Task";

export default items => {
  return {
    '/': () => <List/>,
    '/:id': ({id}) => {
      const item = items.find(item => +item.id === +id);
      return item ? <Item id={+id} title={item.title}/> : null
    }
  }
};