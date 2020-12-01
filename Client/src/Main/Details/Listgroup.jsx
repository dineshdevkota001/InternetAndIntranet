import React, { useState, useEffect, useContext } from 'react'

import List from './List'
import ListGroup from 'react-bootstrap/ListGroup'
import FileUpload from './File'
import UserContext from '../../userContext'
import SelectContext from '../selectContext '
import 'bootstrap/dist/css/bootstrap.min.css';

const { get, abortFunction } = require('../../connection')

const Listgroup = props => {
    // list of the iteam we fetch from backend to display
    let [list, setlist] = useState([{
        name: 'Cannot connect to backend',
        filename: 'default.jpg'
    }, {
        name: 'Cannot connect to backend',
        filename: 'default2.jpg'
    }])
    let loggedIn = useContext(UserContext).login.login
    let globalSelection = useContext(SelectContext)

    // Read
    useEffect(() => {
        let url = '/api/' + props.name.toLowerCase()
        // let url = '/posts'
        let update_list, connection
        get(url).then(res => {
            console.log(res)
            if (res) {
                res = JSON.parse(res);
                setlist(res)
            }
        }).catch(error => {
            console.log(error)
        })
        return function cleanup() {
            abortFunction()
        }
    }, [list])
    // manage selected item and its index
    let [selected, setselected] = useState(0)

    let [c, setc] = useState()
    useEffect(() => {
        let prevState = { ...globalSelection.selection }
        prevState[props.name.toLowerCase()] = list[selected].filename
        globalSelection.setselection(prevState)
        console.log(globalSelection.selection)
    }, [selected])



    // Return the box of component
    return (
        <div id="{props.name}" className='my-5 p-2 rounded shadow' >
            <h1 className='shadow-sm my-1 p-2'>{props.name}</h1>
            <ListGroup variant='flush' className='overflow-auto' style={{ height: '400px' }}>
                {list.map((element, index) =>
                    <List key={index} id={index} selected={index === selected} clicked={setselected}
                        element={element.name} />
                )
                }
            </ListGroup>
            { loggedIn &&
                <FileUpload type={props.name.toLowerCase()}/>
            }
        </div>
    )
}

export default Listgroup