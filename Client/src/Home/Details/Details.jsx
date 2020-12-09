import React from 'react'
import Listgroup from './Listgroup'
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = props =>{
    return (
        <div className='col-3 my-auto'>
        <div className='m-1'>
            <Listgroup name='Mesh'/>
            <Listgroup name='Image'/>
        </div>
        </div>
    );
}

export default Details;