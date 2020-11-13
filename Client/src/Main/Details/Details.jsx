import React, {Component} from 'react'
import Listgroup from './Listgroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css'
class Details extends Component{
    render(){
        
        return (
            <div className='col-3 m-1' >
                <Listgroup name='Mesh' loggedIn={this.props.loggedIn}/>
                <Listgroup name='Image' loggedIn={this.props.loggedIn}/>
            </div>
        );
    }
}
export default Details;