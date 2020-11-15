import React, { Component, useState } from 'react'
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'
import Render from './Render'
const {get,post} = require('../connection')

// TODO Clean this shit up
// class Login2 extends Component {
//   constructor(props) {
//     super(props)
//     this.pages = ['Login', 'SignUp']

//     this.email = ''
//     this.isValid = false
//     this.dirty = false
//     this.state = {
//       page: this.pages[0].toLowerCase(),
//       username : ''
//     }
//   }

//   render() {
//     return (
//       <Modal
//         show={this.props.modalShow}
//         onHide={() => this.props.setModalShow(false)}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header className='m-0' closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             {this.getTitle()}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {this.renderForm()}
//         </Modal.Body>
//       </Modal>
//     );
//   }
// }

const ModalPage = props =>{
  const pages = ['Login', 'SignUp']
  let [page, setpage] = useState(pages[0].toLowerCase())
  console.log(page)
  const getTitle = () => {
    return (
      <Tabs defaultActiveKey={page} id="loginpage" onSelect={(k) =>setpage(k)}>
        {pages.map(element => <Tab
          eventKey={element.toLowerCase()}
          key={element.toLowerCase()}
          title={element}
        />)}
      </Tabs>);
  }
  const handleSubmit = (postobj) => {
    console.log(postobj)
    return 0
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
        {//renderForm()
        }
        <Render page={page} handleSubmit={handleSubmit} />
      </Modal.Body>
      <Modal.Footer>
      <Button className='mx-3' onClick={() => props.setmodal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default ModalPage