import './App.css';
import React, { Component }  from 'react';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Navigate} from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Login from "./pages/Login"
import Home from "./components/Home"
import Artists from './components/Artists';
import Nav_ from './components/Navbar';
import Songs from './components/Songs'
import Recent from './components/Recent'




function App() {
  

  const [token,setToken] = useState()

  
  
  
  const authenticate =  (() =>{
    setToken(token)
    
  })

  const logout = (() => {
    setToken(null)
    localStorage.removeItem("token");
    
  })

  useEffect(() => {
    const token_ = localStorage.getItem("token")
    if (token_){
      setToken(token_)
      }
    },[])


    if (!token){
      return(
        <BrowserRouter>
          <Routes>
            <Route
              path = "/login"
              element = {<Login authenticate = {authenticate}/>}
            />
            <Route path = "*" element = {<Navigate to ={token? "/home" : "/login"}/>}/>
          </Routes>
        </BrowserRouter>
      )
    }

    return(
      <div>
        <BrowserRouter>
          <Nav_ token_ = {token} />
          <Routes>
            <Route path = "/home" element = {<Home token_ = {token} logout = {logout} />}/>
            
            <Route path = "/topartists/shortterm" element = {<Artists token_ = {token} duration = {"short_term"} />}/>
            <Route path = "/topartists/midterm" element = {<Artists token_ = {token} duration = {"medium_term"} />}/>
            <Route path = "/topartists/longterm" element = {<Artists token_ = {token} duration = {"long_term"} />}/>
            <Route path = "/toptracks/shortterm" element = {<Songs token_ = {token} duration = {"short_term"} />}/>
            <Route path = "/toptracks/midterm" element = {<Songs token_ = {token} duration = {"medium_term"} />}/>
            <Route path = "/toptracks/longterm" element = {<Songs token_ = {token} duration = {"long_term"} />}/>
            <Route path = "/recentlyplayed" element = {<Recent token_ = {token}/>}/>

            <Route path = "*" element = {<Navigate to ={token? "/home" : "/login"}/>}/>
          </Routes>
        
        
        
        
        </BrowserRouter>
      </div>




    )

  }
       
export default App;
