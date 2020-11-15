import React, { useState, useEffect } from 'react'

import List from './List'
import ListGroup from 'react-bootstrap/ListGroup'
import FileUpload from './File'

import 'bootstrap/dist/css/bootstrap.min.css';

const { get,post } = require('../../connection')

const Listgroup = props =>{
    // list of the iteam we fetch from backend to display
    let [list, setlist] = useState([{
        name: 'Cannot connect to backend'
    }, {
        name: 'Cannot connect to backend'
    }])
    // component did mount
    useEffect(()=>{
        let x = async ()=>{
            let url = '/get' + props.name.toLowerCase()
            let update_list, connection
            let res = await get(url)
            try {
                res = JSON.parse(res)
                setlist(res.response)
                connection = true
            } 
            catch {
                console.log('disconnected')
                connection = false
            }
        }
        x()
    },[list])

    // manage selected item and its index
    let [selected, setselected] = useState(0)
    let [c, setc] = useState()
    useEffect(()=>{
        setc({
            type: props.name,
            selected: list[selected]
        })
        console.log(c)
    },[selected])


    // Return the box of component
    return (
        <div id="{props.name}" className='h-50 my-5 p-2 rounded shadow'>
                <h1 className='shadow-sm my-1 p-2'>{props.name}</h1>
                <ListGroup variant='flush'>
                    {list.map((element, index) =>
                        <List key={index} id={index} selected={index === selected} clicked={setselected}
                            element={element.name} />
                    )
                    }
                </ListGroup>
                { props.loggedIn &&
                <FileUpload/>
    }
            </div>
    )
}

export default Listgroup