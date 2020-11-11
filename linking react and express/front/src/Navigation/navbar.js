import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
export default class Navigation extends Component{
    
    render(){
     return(
     <Navbar bg="light" expand="lg">
     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#link">Link</Nav.Link>
       </Nav>
     </Navbar.Collapse>
     <Image src="./user.png" roundedCircle />
   </Navbar>
    );   
    }
};