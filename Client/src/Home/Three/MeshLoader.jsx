import React, { useRef, useMemo} from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { localhost } from '../../connection'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'

const MeshLoader = props => {
    const mesh = useRef();
    const geom = useLoader(OBJLoader, localhost+ "/Mesh/default.obj").children[0];
    const texture = useMemo(() => new THREE.TextureLoader().load(localhost + '/Image/' + props.selections['image']), [props.selections['image']]);
    return (
        <mesh ref={mesh} visible geometry={geom.geometry}>
          <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                 <primitive attach="map" object={texture} />
             </meshBasicMaterial>
        </mesh>
    );
}


export default MeshLoader;