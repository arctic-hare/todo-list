import React from "react";
import List from "./pages/List";
import Item from "./pages/Task";

export default {
  '/': () => <List/>,
  '/:id': ({id}) => <Item id={+id}/>
};