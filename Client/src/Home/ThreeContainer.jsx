import React, { useContext} from 'react';
// import { Canvas} from 'react-three-fiber';
// import TestObject from "./Three/Components/Environment";
// import Lights from "./Three/Components/Lights";

import { localhost } from '../connection'
import SelectContext from './selectContext '

const ThreeContainer = props => {
    let selections = useContext(SelectContext).selection
    return (
        <div className='col-8 justify-content-center bg-gray d-flex flex-column'>
            <div className='flex-grow-1 m-5 p-2  border rounded shadow-lg' id='three-main'>
                {/* <Canvas>
                    <TestObject />
                    <Lights />
                </Canvas> */}
            </div>
        </div>
    )
}
export default ThreeContainer
