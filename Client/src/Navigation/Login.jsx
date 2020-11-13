import React, { Component } from 'react'
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'

const {get,post} = require('../connection')

// TODO Clean this shit up
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.pages = ['Login', 'SignUp']
    this.state = {
      page: this.pages[0].toLowerCase(),
      form: {
        username: ''
      }
    }
  }


  handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
      
    // }
    event.preventDefault();
    const formData = new FormData(event.target)
    // const formData = new FormData(form)
    console.log(formData)
    const formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
    post('/post',formDataObj)
  };

  
  handlePageChange = (page) => {
    this.setState({ page: page })
  }

  onChange = e => {
    console.log(e)
  }

  getTitle = () => {
    return (
      <Tabs defaultActiveKey={this.state.page} id="uncontrolled-tab-example" onSelect={(k) => this.handlePageChange(k)}>
        {this.pages.map(element => <Tab
          eventKey={element.toLowerCase()}
          key={element.toLowerCase()}
          title={element}
        />)}
      </Tabs>);
  }

  renderLogin = () => {
    switch (this.state.page) {
      case ('login'):
        return (
          <Form onSubmit={this.handleSubmit} >
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" />
              <Form.Text className="text-muted">
                Enter your Username
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
        </Button>
            <Button className='mx-3' onClick={() => this.props.setModalShow(false)}>Close</Button>
          </Form>);

      default:
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" />
              <Form.Text className="text-muted">
                Enter your Username
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                Enter your Email
              </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button className='mx-3' onClick={() => this.props.setModalShow(false)}>Close</Button>
          </Form>);

    }
  }

  render() {
    return (
      <Modal
        show={this.props.modalShow}
        onHide={() => this.props.setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='m-0' closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.getTitle()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderLogin()}
        </Modal.Body>
      </Modal>
    );
  }
}




