import React, {useEffect} from 'react';
import {useRoutes, navigate} from 'hookrouter';
import routes from "./router";
import Loader from "./components/Loader";
import {useDispatch, useSelector} from "react-redux";
import api from './api'
import {fetchTodos} from './actions'

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items)

  useEffect(() => {
    api.fetchTodos()
    .then( data => {
      dispatch(fetchTodos(data.items))
    })
  }, [dispatch]);

  const routeResult = useRoutes(routes(items));

  return (
    <div className="App">
      <Loader>
        <main className="all">
          <div className="container">
            {routeResult || navigate('/')}
          </div>
        </main>
      </Loader>
    </div>
  );
}

export default App;
