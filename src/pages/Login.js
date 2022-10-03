import React, { Component }  from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router'
import { BrowserRouter, useNavigate } from 'react-router-dom';


function Login ({authenticate}){
    const navigate = useNavigate()

    useEffect(() => {
        console.log(process.env)
        const hash = window.location.hash
        let token = localStorage.getItem("token")
        if (hash){
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          localStorage.setItem("token", token)
          authenticate(token)
          window.location.hash = ""
          navigate("home")

        }
        })
    
        
    

    
    return(
        <div className='cheese'>
        <a href = {process.env.REACT_APP_CONNECTION_CODE}><Button variant="light">Please Login to Spotify</Button></a>
        </div>
    )  

}
export default Login;