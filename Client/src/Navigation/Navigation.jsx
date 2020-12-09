import React, { useState, useContext } from 'react';

import { Image, Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPage from './ModalPage'
import UserContext from '../userContext';
const Navigation = props => {
  let { loggedin,  user } = useContext(UserContext)
  let [modal, setmodal] = useState(false)

  const Pages = ['Home', 'About']
  const renderLinks = () =>{
    return (<Nav className="mr-auto">
        {Pages.map((pagename,index) => <Nav.Link key={index}  onClick={()=>props.setpage(pagename)}>{pagename}</Nav.Link>)}
    </Nav>)
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" className='shadow fix-top' style={{ background: '#FFFFFF' }}>
        <Navbar.Brand onClick={()=>props.setpage('Home')}>Vie3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {renderLinks()}          
        </Navbar.Collapse>
        <div
        onClick={() => setmodal(true)}
        className='p-2'
        >
          {user}
          <Badge className='m-2' variant={loggedin ? 'success' : 'danger'} > </Badge>
          <Image
            src='https://picsum.photos/30'
            roundedCircle
          />
        </div>

      </Navbar>

      {modal &&
        <ModalPage setmodal={setmodal} modal={modal} />
      }
    </div>
  );
}

export default Navigation
