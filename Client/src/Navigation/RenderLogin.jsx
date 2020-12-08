import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import UserContext from '../userContext'
const { localhost, withAuth } = require('../connection')

const RenderLogin = props => {
    // first define Context
    const { setlogin,setuser } = useContext(UserContext)

    // States used
    let [username, setusername] = useState('dineshdevkota001')
    let [password, setpassword] = useState('hello')
    let [isValid, setisValid] = useState(false)
    let [email, setemail] = useState('')

    // other variables
    const postFunction = (postobj) => {
        axios.post(localhost + '/api/user/'+ props.page, postobj, withAuth).then(res => {
        if (res.status === 200) setlogin(true)
        localStorage.setItem('username', res.data.username);
        setuser(res.data.username)
    }).catch(error => { console.log(error) })
}
    // handle events
    const handleSubmit = e => {
        e.preventDefault();
        setlogin('')
        let postobj = { username: username, password: password }
        let temp = false
        axios.get(localhost + '/api/user/check/' + postobj.username).then(
            res => {
                if (res.status === 200) {
                    setisValid(true);
                    temp = true
                }
                switch (props.page) {
                    case 'signup':
                        postobj.email = email
                        if (!temp)
                            postFunction(postobj)
                        break;
                    case 'login':
                    default:
                        if (temp) {
                            postFunction(postobj)
                        }
                        break;
                }
            }
        )
    };

    // other functions
    const renderSignup = () => {
        return (
            <Form.Group controlId="formGroupEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
            </Form.Group>
        );
    }


    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" value={username} onChange={e => setusername(e.target.value)} />
                <Form.Text className="text-muted">
                    Enter your Username
              </Form.Text>
                {isValid &&
                    <Form.Control.Feedback type='invalid' tooltip>Username exists</Form.Control.Feedback>
                }
            </Form.Group>
            {props.page === 'signup' && renderSignup()}
            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
            {props.page === 'signup' ? 'Signup' : 'Login'}
            </Button>
        </Form>);
}

export default RenderLogin
