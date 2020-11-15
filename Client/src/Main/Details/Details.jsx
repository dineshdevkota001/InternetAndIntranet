import React, {Component} from 'react'
import Listgroup from './Listgroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = props =>{
    return (
        <div className='col-3 m-1' >
            <Listgroup name='Mesh' loggedIn={props.loggedIn}/>
            <Listgroup name='Image' loggedIn={props.loggedIn}/>
        </div>
    );
}

export default Details;