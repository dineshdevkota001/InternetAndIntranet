import React, { useState} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';

import ModalPage from './ModalPage'

const {get} = require('../connection')
const Navigation = props =>{
  
  let [modal, setmodal] = useState(true)
  
  let checkOnline =async ()=>{
    let x=await get('/testapi')
    return x
  }
  const connected = checkOnline()

  return(
    <div>
    <Navbar bg="light" expand="lg" className='shadow fixed-bottom' style={{background:'#FFFFFF'}}>
   <Navbar.Brand href="#home">BSOD</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#about">About</Nav.Link>
     </Nav>
   </Navbar.Collapse>
   <Image 
      src='./user.png'
      className={connected ? "bg-success": "bg-danger"}
      roundedCircle
      onClick={()=>setmodal(true)}
      />
    </Navbar>
    {modal &&
    <ModalPage setmodal={setmodal} modal={modal} />
    }
    </div>
   ); 
}

export default Navigation