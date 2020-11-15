import React, { Component,useState, useEffect } from 'react'

import List from './List'

import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './File'

const { get,post } = require('../../connection')
class Listgroup1 extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.state = {
            list: [{
                name: 'Cannot connect to backend'
            }, {
                name: 'Cannot connect to backend'
            }],
            connected: false,
            selected: 0,
            file: ''
        }
    }
    
    // gets the data from backend
    async componentDidMount() {
        let url = '/get' + this.name.toLowerCase()
        let update_list, connection
        let res = await get(url)
        try {
            res = JSON.parse(res)
            update_list = res.response
            connection = true
        } catch {
            console.log('disconnected')
            update_list = this.state.list
            connection = false
        } finally {
            this.setState({
                list: update_list,
                connected: connection
            })
        }
    }

    // handle cllicks on the itemlist
    
    handleClick = (index) => {
        console.log('clicked ', this.name, index)
        this.setState({
            selected: index
        })
    }
    
    // handleSubmit = (e) =>{
    //     e.preventDefault();
    //     let postobj = {
    //         type : this.name.toLowerCase(),
    //         file : this.state.file
    //     }
    //     post('/post',postobj)
    // }

    // handleChange= e =>{
    //     setProgess(0)
    //     const file = e.target.files[0]; // accesing file
    //     console.log(file);
    //     this.setState({file: file}); // storing file
    // }
    
    
    render() {
        return (
            <div>

            </div>
        )
    }
}


const Listgroup = props =>{
    let [list, setlist] = useState([{
        name: 'Cannot connect to backend'
    }, {
        name: 'Cannot connect to backend'
    }])

    useEffect(async()=>{
        let url = '/get' + name.toLowerCase()
        let update_list, connection
        let res = await get(url)
        try {
            res = JSON.parse(res)
            setlist(res.response)
            connection = true
        } catch {
            console.log('disconnected')
            connection = false
        }
    })
    let [selected, setselected] = useState(0)
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