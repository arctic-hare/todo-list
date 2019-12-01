import React from 'react';

import {useRoutes, navigate} from 'hookrouter';
import routes from "./router";

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <main className="all">
        <div className="container">
          {routeResult || navigate('/')}
        </div>
      </main>
    </div>
  );
}

export default App;
