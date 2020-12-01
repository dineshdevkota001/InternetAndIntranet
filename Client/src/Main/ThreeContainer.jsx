import React, {useContext} from 'react';
import { Canvas} from 'react-three-fiber';
import {localhost} from '../connection'
import TestObject from "./Three/Components/Environment";
import Lights from "./Three/Components/Lights";
import SelectContext from './selectContext '

const ThreeContainer = props=>{
        let selections = useContext(SelectContext).selection
        return (
        <div className='col-8 justify-content-center bg-gray d-flex flex-column'>
            <div className='flex-grow-1 m-5 p-2  border rounded shadow-lg' id = 'three-main'>
                {/* <Canvas>
                    <TestObject />
                    <Lights />
                </Canvas> */}
                <img src={localhost+'/Image/'+selections['image']}/>
            </div>
        </div>
        )
}
export default ThreeContainer