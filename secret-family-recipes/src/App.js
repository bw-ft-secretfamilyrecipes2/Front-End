import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory } from 'react-router'; 

import './App.css';
import Nav from "./components/Nav.js"
import Form from "./components/Form.js"
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import Recipes from './components/Recipes.js';
function App() {
  // const match = useHistory();
  // useEffect(()=>{
  //   if (localStorage.getItem("token")){
  //     match.push('/recipes/userID')
  //   }
  // },[])
  return (
    <div className="App"> 
      
      <Nav/>
      <Route exact path='/'>
      <Form />
      </Route>
      <Route path='/login'>
      <Login />
      </Route>
      <PrivateRoute path='/recipes' component={Recipes} />
  
    </div>
    
  );
}

export default App;
