
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
  <Link to="/contact">Contact</Link>
  </nav>
)

const App = () => (
  <Router history={ hashHistory }>
     <div>
     <Links />
     <Switch>
      <Route exact path="/" render={() => <h1>Home</h1> } />
      <Route path="/about" render={() => <h1>About</h1> } />
      <Route path="/contact" render={() => <h1>Contact</h1> } />
     <Route path="/:itemid"
    render={({match}) => <h1>Item: {match.params.itemid}</h1>} />
      </Switch>
      </div>
  </Router>
);

export default App;
