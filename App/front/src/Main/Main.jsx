import React, {Component} from 'react'
import Details from './Details/Details'
import ThreeViewer from './ThreeViewer'
import './three.css'
class Main extends Component{
    render(){
        return (
            <div id='Main' className='row m-1 vh-90 justify-content-center verticen' >
                <Details/>
                <ThreeViewer />
            </div>
        );
    }
}
export default Main;