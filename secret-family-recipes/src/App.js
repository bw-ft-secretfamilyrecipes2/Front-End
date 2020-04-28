import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Nav from "./components/Nav.js"
import Form from "./components/Form.js"
import Login from "./components/Login.js"

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Route exact path='/'>
      <Form />
      </Route>
      <Route path='/login'>
      <Login />
      </Route>
      </Router>
    </div>
    
  );
}

export default App;
