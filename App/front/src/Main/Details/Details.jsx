import React, {Component} from 'react'
import Listgroup from './Listgroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css'
class Details extends Component{
    render(){
        
        return (
            <div className='col-3' >
                <Listgroup name='Mesh'/>
                <Listgroup name='Image'/>
            </div>
        );
    }
}
export default Details;