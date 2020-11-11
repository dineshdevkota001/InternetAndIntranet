import React, {Component} from 'react'
import Mesh from './Mesh'
import Image from './Image'
class Details extends Component{
    render(){
        return (
            <div>
                <Mesh/>
                <Image/>
            </div>
        );
    }
}
export default Details;