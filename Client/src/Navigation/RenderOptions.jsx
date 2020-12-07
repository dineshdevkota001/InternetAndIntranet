import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import userContext from '../userContext'
const {localhost,withAuth} = require('../connection')

const ReactOptions = (props)=>{
    const {setlogin} = useContext(userContext)
    const handleLogout = () =>{
        setlogin('')
        axios.get(localhost+'/api/user/logout', withAuth).then(
            res=>{ if (res.status === 200)setlogin(false)  }
        ).catch(error=>{console.log(error)})
        props.setmodal(false)
    }
    return (
        <div className='row'>
        <Button size='lg' variant='danger' onClick={handleLogout} className='mx-auto col-4'>
            Logout
        </Button>
        </div>
    )
}

export default ReactOptions;