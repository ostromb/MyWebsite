/**
 * router.js routes each url path to its corresponding component it should render
 */

 import { BrowserRouter, Routes, Route } from "react-router-dom";

 import React from 'react'

 import HomePage from "./Components/HomePage";
 import Repos from "./Components/Repos";
 import About from "./Components/About";
 
 const AppRouter = () => {
   return (
       <BrowserRouter>
         <Routes>
            
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/Repositories" element={<Repos />}/>
            <Route exact path="/About" element={<About />}></Route>      
         </Routes>  
       </BrowserRouter>     
   );
 };
 
 export default AppRouter