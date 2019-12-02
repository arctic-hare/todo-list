import React, {useEffect} from 'react';
import {useRoutes, navigate} from 'hookrouter';
import routes from "./router";
import Loader from "./components/Loader";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'
import {fetchTodos} from './actions'


function App() {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items)

  function getData() {
    return dispatch => {
      axios.get('https://test.megapolis-it.ru/api/list')
      .then(({data}) => {
        console.log('response', data)
        dispatch(fetchTodos(data.data))
      });
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <Loader>
        <main className="all">
          {items.length > 0 &&
          <div className="container">
            {routeResult || navigate('/')}
          </div>
          }
        </main>
      </Loader>
    </div>
  );
}

export default App;
