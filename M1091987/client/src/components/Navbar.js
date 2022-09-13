import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../App";
// import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {
  // const dispatchcart = useDispatch();
  // const cartState=useSelector(state=>state.cartReducer);

  const{state,dispatch}=useContext(UserContext);

  const RenderMenu=()=>{
    if(state){
      return(
        <>
         <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Create
                  {/* {cartState.cartItems.length} */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/list">
                  List
                  {/* {cartState.cartItems.length} */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/salary">
                  Salary
                  {/* {cartState.cartItems.length} */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li> */}
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Registration
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
        </>
      )
    }else{
      return(
        <>
         <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Registration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li> */}
</>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="data:image/jpeg;base64,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" alt="navlogo" width={170} height={70}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" >
             <RenderMenu/>
                         </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
