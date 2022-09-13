// import './App.css';
import React, { createContext,useReducer } from "react";
import { Route} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import { Home } from "./components/Home";
import Login  from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
// import Cart from "./components/Cart";
import Create from "./components/Create";
import List from "./components/List";
// import Errorpage from "./components/Errorpage";
import Salary from "./components/Salary";

import { initialState,reducer } from "./reducer/UseReducer";

//context Api
export const UserContext = createContext();

const App=()=> {
  const[state,dispatch]=useReducer(reducer, initialState);
  return (
    <div className="App">  
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/signup">
    <Signup />
  </Route>
  <Route path="/logout">
    <Logout />
  </Route>
  <Route path="/create">
    <Create />
  </Route>
  <Route path="/list">
    <List />
  </Route>
  <Route path="/salary">
    <Salary />
  </Route>
  {/* <Route>
    <Errorpage />
  </Route> */}
        </UserContext.Provider>
    </div>
  );
}

export default App;
