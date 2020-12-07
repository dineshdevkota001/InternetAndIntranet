import React, { useState, useEffect, useContext } from 'react'

import List from './List'
import ListGroup from 'react-bootstrap/ListGroup'
import FileUpload from './File'
import UserContext from '../../userContext'
import SelectContext from '../selectContext '
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const {localhost,withAuth} = require('../../connection')

const Listgroup = props => {
    // Contexts 
    let {loggedin} = useContext(UserContext)
    let globalSelection = useContext(SelectContext)

    // Local State
    let [list, setlist] = useState([{_id:1, name:'x', filename:'default.jpg'}])
    let [selected, setselected] = useState(0);

    // other variables
    const name = props.name.toLowerCase()
    const url = '/api/' + name

    useEffect(() => {
        axios.get(localhost+ url, withAuth).then(res => {
            console.log('Resource reply', res.body)
            if (res.status === 200) {
                console.log(res)
            }
        }).catch(error => {
            console.log(error)
        })
        console.log('call ended')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let prevState = { ...globalSelection.selection }
        prevState[name] = list[selected].filename
        globalSelection.setselection(prevState)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])


    // handle deletion
    const deleteResource = (index) =>{
        axios.delete(localhost+ url+'/'+ list[index]._id , withAuth).then(res=>{
            if (res.status === 200){
                console.log(res)
                list.splice(index, 1)
            }
        })
    }

    // return
    return (
        <div id="{props.name}" className='my-5 p-2 rounded shadow' >
            <h1 className='shadow-sm my-1 p-2'>{props.name + loggedin}</h1>
            <ListGroup variant='flush' className='overflow-auto' style={{ height: '400px' }}>
                {list.map((element, index) =>
                    <List key={index} id={index} selected={index === selected} clicked={setselected} deleteResource={deleteResource}
                        element={element.name} />
                )
                }
            </ListGroup>
            { loggedin && <FileUpload type={name}/>}
        </div>
    )
}

export default Listgroup
