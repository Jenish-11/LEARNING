import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
export default function App() {
  const[reg,regis]=useState([])
  const[login,islog]=useState(false)
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/jenish">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/jk">Jk</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
        
          <Route path="/register">
            <Register reg={reg} regis={regis}/>
          </Route>
          <Route path="/home" exact>
            <Home login={login} islog={islog}/>
          </Route>
          <Route path="/" exact>
            <Login reg={reg} regis={regis} login={login} islog={islog}/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/jk">
            <Jk/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
// function Jk(){
//   return <h2>Hi</h2>
// }