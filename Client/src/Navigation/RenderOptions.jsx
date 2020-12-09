import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import userContext from '../userContext'
const {localhost,withAuth} = require('../connection')

const ReactOptions = (props)=>{
    const {setlogin, setusername} = useContext(userContext)
    const logout = () =>{
        setlogin(false)
        setusername('')
    }
    const handleLogout = () =>{
        setlogin('')
        axios.get(localhost+'/api/user/logout', withAuth).then(
            res=>{ if (res.status === 200) logout() }
        ).catch(error=>{console.log(error)})
        props.setmodal(false)
    }
    const handleDelete = () =>{
        setlogin('')
        axios.delete(localhost+'/api/user/delete', withAuth).then(
            res=>{ if (res.status === 200) logout()  }
        ).catch(error=>{console.log(error)})
        props.setmodal(false)
    }
    return (
        <div className='row'>
        <Button size='lg' variant='danger' onClick={handleLogout} className='mx-auto my-2 col-4'>
            Logout
        </Button>
        <br/>
        <Button size='lg' variant='danger' onClick={handleDelete} className='mx-auto my-2 col-4'>
            Delete User
        </Button>
        </div>
    )
}

export default ReactOptions;