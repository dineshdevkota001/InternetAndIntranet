import React, { useState } from 'react'

import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button'
const List = props => {
    let [hover, sethover] = useState(false)

    return (<ListGroupItem
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        onClick={() => props.clicked(props.id)}
        className={'my-1 list-group-item' + (hover ? ' list-group-item-primary' : '') + (props.selected ? ' active' : '')}>
        <div className='row m-0 p-0 '>
            <div className='col-10'>
                {props.element}
            </div>
            <div className='m-0 p-0 h-100 text-right col-2'>
                <Button variant={props.selected ? 'danger' : "outline-danger"} size='sm' onClick={()=> props.deleteResource(props.key)} >
                    Delete
                </Button>
            </div>
        </div>
    </ListGroupItem>)
}


export default List;