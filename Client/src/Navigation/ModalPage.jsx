import React, { useState, useContext, } from 'react'
import { Modal, Button, Tabs, Tab, Spinner} from 'react-bootstrap'
import RenderLogin from './RenderLogin'
import RenderOptions from './RenderOptions'
import UserContext from '../userContext'

const ModalPage = props => {
  const { loggedin,user } = useContext(UserContext)
  
  const pages = ['Login', 'SignUp']
  let [page, setpage] = useState(pages[0].toLowerCase())

  
  const getTitle = () => {
    return (
      <Tabs defaultActiveKey={page} id="loginpage" onSelect={(k) => setpage(k)}>
        {pages.map(element => <Tab
          eventKey={element.toLowerCase()}
          key={element.toLowerCase()}
          title={element}
        />)}
      </Tabs>);
  }

  return (
    <Modal
      show={props.modal}
      onHide={() => props.setmodal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='m-0' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {(loggedin===false) && getTitle()}
          {loggedin && 'Hello, '+user}
          {(loggedin==='') && 'Processing, '+user}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {(loggedin===false) && <RenderLogin page={page} setmodal={props.setmodal}/>}
        {loggedin && <RenderOptions setmodal={props.setmodal}/>}
        {(loggedin==='') && <div className='d-flex justify-content-center m-5'><Spinner animation="border" /></div>}
      </Modal.Body>
      <Modal.Footer>
        <Button className='mx-3' onClick={() => props.setmodal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPage
