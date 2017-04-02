
import React from 'react';
import { BrowserRouter  as Router ,
  Route,
   hashHistory,
   Switch,
     Link } from 'react-router-dom';
import './App.css';


const Links = () => (
  <nav var style = {{ 'text-align':'center'}}
>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact/xx/x/bb">Contact</Link>
  </nav>
)

const App = () => (
  <Router history={ hashHistory }>
     <div>
     <Links />
     <Switch>
      <Route exact path="/" render={() => <h1>Home</h1> } />
      <Route path="/about" render={() => <h1>About</h1> } />
      <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      </div>
  </Router>
);

export default App;
