import React from 'react'
import Listgroup from './Listgroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = props =>{
    return (
        <div className='col-3 m-1' >
            <Listgroup name='Mesh'/>
            <Listgroup name='Image'/>
        </div>
    );
}

export default Details;