import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login'

const {get} = require('../connection')

export default class Navigation extends Component{
  constructor(props){
    super(props)
    this.state = {
      connected:false,
      modalShow : false}
  }
  async componentDidMount(){
    let res = await get('/testAPI')
    this.setState({connected:!!res})
  }

  

  setModalShow = (state)=>{
    this.setState({modalShow: state})
  }

  render(){
     return(
      <div>
      <Navbar bg="light" expand="lg" className='shadow fixed-bottom' style={{background:'#FFFFFF'}}>
     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#about">About</Nav.Link>
       </Nav>
     </Navbar.Collapse>
     <Image 
        src="./user.png" 
        className={this.state.connected ? "bg-success": "bg-danger"}
        roundedCircle
        onClick={()=>this.setModalShow(true)}
        />
      </Navbar>
      {this.state.modalShow &&
      <Login setModalShow={this.setModalShow} modalShow={this.state.modalShow} />
      }
      </div>
     );   
    }
};
