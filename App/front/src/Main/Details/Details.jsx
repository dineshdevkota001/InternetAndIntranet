import React, {Component} from 'react'
import Listgroup from './Listgroup'
class Details extends Component{
    render(){
        return (
            <div>
                <Listgroup name='Mesh'/>
                <Listgroup name='Image'/>
            </div>
        );
    }
}
export default Details;