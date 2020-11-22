import React, { Component } from 'react'
import List from './List'

import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

import 'bootstrap/dist/css/bootstrap.min.css';


const { get } = require('../../connection')
export default class Listgroup extends Component {
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
            selected: 0
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
    render() {
        return (
            <div id="{this.name}" className='h-50 my-5 p-2 rounded shadow'>
                <h1 className='shadow-sm my-1 p-2'>{this.name}</h1>
                <ListGroup variant='flush'>

                    {this.state.list.map((element, index) =>
                        <List key={index} id={index} selected={index === this.state.selected} clicked={this.handleClick}
                            element={element.name} />
                    )
                    }

                </ListGroup>
                { this.props.loggedIn &&
                <Form>
                    <Form.File
                        id="Browse"
                        label={'Upload new ' + this.name}
                        custom
                    />
                </Form>
    }
            </div>
        )
    }
}
