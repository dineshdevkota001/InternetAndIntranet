import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
const {post} = require('../connection')

const Render = props => {
    let [username, setusername] = useState('')
    let checkValid = async () => {
        return await post('/user/check',{username: username})
    }

    let [isValid, setisValid] = useState(false)
    let [email, setemail] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        let postobj = {username: username}
        if (props.page === 'signup'){
            postobj.email = email
        }
        isValid=true
        props.handleSubmit(postobj)
    };

    const renderSignup = () => {
        if ((props.page === 'signup'))
            return (
                <Form.Group controlId="formGroupEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                </Form.Group>
                );

    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" onChange={e => setusername(e.target.value)} />
                <Form.Text className="text-muted">
                    Enter your Username
              </Form.Text>
                {isValid &&
                    <Form.Control.Feedback type='invalid' tooltip>Username exists</Form.Control.Feedback>
                }
            </Form.Group>
            {renderSignup()}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>);
}

export default Render