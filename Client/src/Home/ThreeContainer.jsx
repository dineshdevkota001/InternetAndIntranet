import React, {Suspense, useContext } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import MeshLoader from './Three/MeshLoader'
import CameraControls from './Three/CameraControls'
import Fallback from './Three/Fallback'
import {Spinner} from 'react-bootstrap'
// import { Canvas} from 'react-three-fiber';
// import TestObject from "./Three/Components/Environment";
// import Lights from "./Three/Components/Lights";

import { localhost } from '../connection'
import SelectContext from './selectContext '

const ThreeContainer = props => {
    let selections = useContext(SelectContext).selection
    return (
        <div className='col-8 min-vh-100 justify-content-center bg-gray d-flex flex-column'>
            <div className='flex-grow-1 m-5 p-2  border rounded shadow-lg' id='three-main'>
                <Canvas>
                    <CameraControls />
                    {/* <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback = {<Fallback />}>
                    <MeshLoader  selections={selections}/>
                    </Suspense>
                    {/* <Fallback/> */}
                    {/* <MeshLoader position={[2.5, 0, 0]} selections={selections}/> */}
                </Canvas>
            </div>
        </div>
    )
}
export default ThreeContainer
