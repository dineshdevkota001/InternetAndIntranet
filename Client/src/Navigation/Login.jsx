import React, { Component } from 'react'
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap'

const {get,post} = require('../connection')

// TODO Clean this shit up
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.pages = ['Login', 'SignUp']

    this.email = ''
    this.isValid = false
    this.dirty = false
    this.state = {
      page: this.pages[0].toLowerCase(),
      username : ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let postobj = JSON.parse(JSON.stringify(this.state));
    if (postobj.page === 'signup'){
      postobj.email = this.email
    }
    let response =await post('/post',postobj)
  };

  
  handlePageChange = (page) => {
    this.setState({ page: page })
  }

  onChange = (e) => {
    let value = e.target.value
    this.setState({username:value})
    this.isValid = post('/user/check',{username: value})
    this.dirty = true
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

  renderSignup = () => {
    if ((this.state.page === 'signup'))    
    return (
          <Form.Group controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>this.email = e.target.value}/>
          </Form.Group>);

    }

  renderForm =()=>{
    return (
      <Form onSubmit={this.handleSubmit} >
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" onChange={e=>this.onChange(e)} />
              <Form.Text className="text-muted">
                Enter your Username
              </Form.Text>
              {this.isValid &&
              <Form.Control.Feedback type='invalid' tooltip>Username exists</Form.Control.Feedback>
              }
            </Form.Group>
            {this.renderSignup()}
            <Button variant="primary" type="submit">
              Submit
        </Button>
            <Button className='mx-3' onClick={() => this.props.setModalShow(false)}>Close</Button>
          </Form>);
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
          {this.renderForm()}
        </Modal.Body>
      </Modal>
    );
  }
}




