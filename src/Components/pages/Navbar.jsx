
import React from "react";

import { Link } from "react-router-dom";

import "../../index.css"




export const Navbar = () => {

 
  return (
    <>
      <nav>

        <Link className="nav-home"  to={"/"}>Home</Link>

     

        <Link className="nav-home"  to={"/About"}>About</Link>

        <Link className="nav-home"  to={"/Books"}>Books</Link>
        <Link className="nav-home" to={"/login"}>Login</Link>
        
      </nav>
    </>
  );
};
