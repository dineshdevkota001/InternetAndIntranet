import React, {Component} from 'react'
import Details from './Details/Details'

class Main extends Component{
    render(){
        return (
            <div id='Main' className='row m-2'>
                <Details/>
            </div>
        );
    }
}
export default Main;