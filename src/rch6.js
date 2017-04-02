import React from 'react';
import { BrowserRouter  as Router ,
  Route,hashHistory} from 'react-router-dom';

const App = (props) => (
  <Router history={hashHistory} >
     <div>
      <Route
       path="/:a(\d{2}-\d{2}-\d{4})/:b(\.[a-z]+)"
       render={({match}) => (
          <h1>
             paramA: {match.params.a}<br />
             paramB: {match.params.b}
          </h1>
      )} />
      </div>
  </Router>
);

export default App;
