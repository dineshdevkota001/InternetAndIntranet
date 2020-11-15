import React, {useState,useEffect} from 'react'

import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const {get} = require('../../connection')

const List = props =>{
    let [hover, sethover] = useState(false)
    return (<ListGroupItem
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            onClick={() => props.clicked(props.id)}
            className={'my-1 list-group-item' + (hover ? ' list-group-item-primary' : '') + (props.selected ? ' active' : '')}>
            {props.element}
        </ListGroupItem>)
}


export default List;