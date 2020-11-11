import React, {Component} from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'
export default class ThreeViewer extends Component{
    componentDidMount() {
        //=== THREE JS CODE ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const loader = new GLTFLoader();
        loader.load(
            "./../untitled.glb",
            function (gltf) {
                scene.add(gltf);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
        //=== END OF THREE JS CODE ===
    }
    render () {
        return (
        <div className='col verticen'>
            <div ref = {ref => this.mount = ref} className='m-2 p-5 h-100  border rounded shadow-lg' >
            here
            <br/>
            </div>
        </div>
        )
    }
}