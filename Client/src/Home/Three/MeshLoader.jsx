import React, { useRef, useState, useMemo, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

import five from "./assets/five.png";
import { localhost } from '../../connection'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import ThreeContainer from "../ThreeContainer";
const MeshLoader = props => {
    // This reference will give us direct access to the mesh
    // const mesh = useRef();
    // const [active, setActive] = useState(false);

    // const [model, setmodel] = useState(null)
    // const [texture, settexture] =useState( null )
    // const [obj, setobj] =useState( null )
    // useEffect(() => {
    //     const text = new THREE.TextureLoader().load(five)
    //     settexture(text)
    //     new OBJLoader.load('./assets/default.obj',(object)=>{
    //         setobj(object)
    //         const newmodel = new THREE.Mesh(object, text)
    //         setmodel(newmodel)
    //     })
    // }, [])
    const texture = useMemo(() => new THREE.TextureLoader().load(localhost + '/Image/' + props.selections['image']), [props.selections['image']]);
    // const texture = useMemo(() => new THREE.TextureLoader().load(five), []);
    // // const [geometry, setgeometry] = useState(null)
    // // useMemo(() => new OBJLoader().load('./assets/default.obj',setgeometry), []);
    // // const geometry = useMemo(() => new OBJLoader().load(localhost + '/Mesh/' + props.selections['mesh']), []);
    // // const Box = new THREE.BoxBufferGeometry(1,1,1);
    // // const bufferG = useLoader(OBJLoader, "./assets/default.obj")
    // // const geometry = new THREE.Geometry().fromBufferGeometry( bufferGeometry )
    // if (model === null)
    // return(
    //       <mesh
    //         {...props}
    //         ref={mesh}

    //         scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
    //         onClick={(e) => setActive(!active)}
    //     >
    //         <boxBufferGeometry args={[1, 1, 1]} />
            
    //         {/* <polyhedronBufferGeometry attach='geometry' > {geometry && <primitive object={geometry}/>}</polyhedronBufferGeometry > */}
    //         <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
    //             <texture attach="map" object={texture} />
    //             <primitive attach="map" object={texture} />
    //         </meshBasicMaterial>
    //     </mesh>
    // );
    // else return (<primitive object={model} position={[0, 0, 0]} />)
    const mesh = useRef();
    // const geom = useLoader(GLTFLoader, localhost+ "/Mesh/airwing.glb").nodes.Default;
    const geom = useLoader(OBJLoader, localhost+ "/Mesh/default.obj").children[0];
    return (
    //   <group ref={group}>
        <mesh ref={mesh} visible geometry={geom.geometry}>
          <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                 {/* <texture attach="map" object={texture} /> */}
                 <primitive attach="map" object={texture} />
             </meshBasicMaterial>
        </mesh>
    //    </group>
    );
}




// function MeshLoader() {
//     const group = useRef();
//     const { nodes } = useLoader(GLTFLoader, localhost+ "/Mesh/airwing.glb");
//     return (
//       <group ref={group}>
//         <mesh visible geometry={nodes.Default.geometry}>
//           <meshStandardMaterial
//             attach="material"
//             color="white"
//             roughness={0.3}
//             metalness={0.3}
//           />
//         </mesh>
//       </group>
//     );
//   }


export default MeshLoader;