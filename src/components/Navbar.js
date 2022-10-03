import React, { Component }  from 'react';
import '../App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {LinkContainer} from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';




function Nav_({token_}){


    const [data, setData] = useState(null)
   



    useEffect(() =>{

        
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer " + token_,
        },
      })
      .then((response) => {
        setData(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      });

    


    },[token_])



    return (
            <Navbar className = "navbar" bg = 'dark' variant = 'dark' sticky = 'top'>
                <Navbar.Brand className='profilePicture'>
                    {data && <img src = {data.images[0].url} className='img-fluid rounded-pill'  object-fit = 'cover' width = '35px' height= '35px'/>}{" "}
                    {data && data.display_name}
                </Navbar.Brand>

                
                <Nav>

                    <LinkContainer to = "/home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to = "/recentlyplayed">
                        <Nav.Link>Recently Played</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title="Top Artists" id="collasible-nav-dropdown">
                      
                    <LinkContainer to = "/topartists/shortterm">
                       <NavDropdown.Item>Last 4 Weeks</NavDropdown.Item>
                    </LinkContainer> 

                    <LinkContainer to = "/topartists/midterm">
                       <NavDropdown.Item>Last 6 Months</NavDropdown.Item>
                    </LinkContainer> 

                    <LinkContainer to = "/topartists/longterm">
                       <NavDropdown.Item>All Time</NavDropdown.Item>
                    </LinkContainer>
                    </NavDropdown>  



                    <NavDropdown title="Top Tracks" id="collasible-nav-dropdown">
                      
                    <LinkContainer to = "/toptracks/shortterm">
                       <NavDropdown.Item>Last 4 Weeks</NavDropdown.Item>
                    </LinkContainer> 

                    <LinkContainer to = "/toptracks/midterm">
                       <NavDropdown.Item>Last 6 Months</NavDropdown.Item>
                    </LinkContainer> 

                    <LinkContainer to = "/toptracks/longterm">
                       <NavDropdown.Item>All Time</NavDropdown.Item>
                    </LinkContainer> 
      
                  </NavDropdown>

                </Nav>
            </Navbar>
            






      );




}
export default Nav_