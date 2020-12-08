import React, { useRef, useState, useMemo, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

import five from "./assets/five.png";
import { localhost } from '../../connection'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import ThreeContainer from "../ThreeContainer";
const MeshLoader = props => {
    const mesh = useRef();
    // const geom = useLoader(GLTFLoader, localhost+ "/Mesh/airwing.glb").nodes.Default;
    const geom = useLoader(OBJLoader, localhost+ '/Mesh/'+props.selections['mesh']).children[0];
    // const geom = useMemo(()=> (props.selections['mesh'].substring(-3,-1) === 'obj') ? new obL.load(localhost+ "/Mesh/default.obj").children[0] : glL.load( localhost+ "/Mesh/default.obj").children[0], [props.selections['mesh']])
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