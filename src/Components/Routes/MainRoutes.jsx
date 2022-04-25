
import React from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { About } from "../pages/About";
import Books from "../pages/Books";


import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Navbar } from "../pages/Navbar";

const Mainroutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
       
       <Route path='/' element=
       {<Home/>}/>
       <Route path='/About' element=
       {<About/>}/>


       <Route path='/Books' element=
       {<Books/>}/>

       <Route path='/Login' element=
       {<Login/>}/>
    
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default Mainroutes;
