
import React from 'react';
import { BrowserRouter  as Router ,
  Route,
  hashHistory,
  Switch,
  Redirect,
  Link } from 'react-router-dom';

import './App.css';

const loggedin = true;
const Links = () =>
  <nav>
  <Link to="/">Home</Link>
  <Link to="/old/123">Old</Link>
  <Link to="/new/456">New</Link>
  <Link to="/Protected">Protected</Link>
  </nav>


const App = () => (
      <Router history={ hashHistory }>
         <div>
         <Links />
           <Route exact path="/" render={() => (<h1>Home</h1>)} />
           <Route
            path="/new/:str"
             render={({match}) => (<h1>New: {match.params.str}</h1>)}   />

           <Route path="/old/:str"
           render={({match}) =>(
             <Redirect to={'/new/${match.params.str}'} />
           )} />
             <Route path="/protected" render={() =>(
               loggedin
               ?<h1> Welcome to the protected page </h1>
               :<Redirect to="/new/Login" />
           )} />
         </div>
     </Router>
);
export default App;
