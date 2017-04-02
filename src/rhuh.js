import React from 'react';
import { BrowserRouter  as Router ,
  Route } from 'react-router-dom';


import Root from './Root';
import Home from './Home';
import User from './User';

const App = () => {
    return (
      <Router>
       <div>
          <Route path="/" component={ Root } />
          <Route path="/user" component={ User } />
          <Route path="/home" component={ Home } />
        </div>
      </Router>
    );
}
export default App;
