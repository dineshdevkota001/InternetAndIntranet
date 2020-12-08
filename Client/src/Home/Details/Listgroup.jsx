import React, { useState, useEffect, useContext } from 'react'

import List from './List'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import FileUpload from './File'
import UserContext from '../../userContext'
import SelectContext from '../selectContext '
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const {localhost,withAuth} = require('../../connection')

const Listgroup = props => {
    // Contexts 
    // let {loggedin} = useContext(UserContext)
    let loggedin = true
    let globalSelection = useContext(SelectContext)

    // Local State
    let [list, setlist] = useState([{_id:1, name:'disconnected from network', filename:'default.jpg'}])
    let [selected, setselected] = useState(-1);
    let [loading, setloading] = useState(true)
    // other variables
    const name = props.name.toLowerCase()
    const url = '/api/' + name

    useEffect(() => {
        axios.get(localhost+ url, withAuth).then(res => {
            console.log('Resource reply', res.data)
            if (res.status === 200) {
                setlist(res.data)
                setloading(false)
            }
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let prevState = { ...globalSelection.selection }
        if (list[selected]) prevState[name] = list[selected].filename;
        else prevState[name]= (name === 'image') ? 'default.jpg' : 'default.obj'
        globalSelection.setselection(prevState)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])


    // handle deletion
    const deleteResource = (index) =>{
        axios.delete(localhost+ url+'/'+ list[index]._id , withAuth).then(res=>{
            if (res.status === 200){
                let prevlist = [...list]
                prevlist.splice(index, 1)
                setlist(prevlist)
                let prevselected = selected
                setselected(prevselected-1)
            }
        })
    }

    const handleAddition = data =>{
        let prevlist = list
        prevlist.push(data)
        setlist(prevlist)
    }

    // return
    return (
        <div id="{props.name}" className='my-3 p-2 rounded shadow' >
            <h1 className='shadow-sm my-1 p-2'>{props.name}</h1>
            {loading ? <Spinner animation='grow' /> : <ListGroup variant='flush' className='overflow-auto' style={{ height: '30vh' }} >
                {list.map((element, index) =>
                    <List key={index} id={index} selected={index === selected} clicked={setselected} deleteResource={deleteResource}
                        element={element.name} />
                )
                }
            </ListGroup>}
            
            { loggedin && <FileUpload type={name} handleAddition={handleAddition}/>}
        </div>
    )
}

export default Listgroup
