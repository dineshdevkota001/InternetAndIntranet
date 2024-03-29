import React, {Suspense, useContext } from 'react';
import { Canvas} from "react-three-fiber";
import MeshLoader from './MeshLoader'
import Fallback from './Fallback'
import SelectContext from '../selectContext '
import {OrbitControls} from '@react-three/drei'

const ThreeContainer = props => {
    let selections = useContext(SelectContext).selection
    return (
        <div className='col-8 m-2 bg-gray d-flex flex-column'>
        <div className='m-2 p-2 rounded shadow-lg' id='three-main'>
                <Canvas style={{height:'87vh', width:'60vw'}}>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback = {<Fallback />}>
                    <MeshLoader  selections={selections}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
export default ThreeContainer
