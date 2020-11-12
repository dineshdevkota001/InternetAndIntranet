import React, {Component} from 'react';
import { Canvas} from 'react-three-fiber';
import TestObject from "./Three/render";

export default class ThreeContainer extends Component{
    render () {
        return (
        <div className='col verticen'>
            <div className='m-2 p-5 h-100  border rounded shadow-lg' id = 'three-main'>
                <Canvas>
                    <TestObject />
                </Canvas>
            </div>
        </div>
        )
    }
}
