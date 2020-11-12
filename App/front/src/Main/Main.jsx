import React, {Component} from 'react'
import Details from './Details/Details'
import './three.css'
import ThreeContainer from './ThreeContainer';
class Main extends Component{
    render(){
        return (
            <div className = 'container-fluid'>
                <div id='Main' className='row m-1 vh-90 fill-grow-1 justify-content-center verticen' >
                    <Details/>
                    <ThreeContainer />
                </div>
            </div>
        );
    }
}
export default Main;