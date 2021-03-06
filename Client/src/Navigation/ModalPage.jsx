import React, { Component, useState } from 'react'
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'
import Render from './Render'
const { get, post } = require('../connection')

const ModalPage = props => {

  const pages = ['Login', 'SignUp']
  let [page, setpage] = useState(pages[0].toLowerCase())
  console.log(page)
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

  const handleSubmit = (postobj) => {
    switch (page) {
      case 'login':
        get('/api/user/' + postobj.username).then(result => { console.log(result) })
        break
      case 'signup':
        post('/api/signup', postobj).then(result => {
          console.log(result)
        })
    }
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
          {getTitle()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Render page={page} handleSubmit={handleSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button className='mx-3' onClick={() => props.setmodal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPage