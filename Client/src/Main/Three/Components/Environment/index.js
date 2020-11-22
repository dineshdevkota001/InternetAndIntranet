import React,{Component} from 'react';
import { BackSide } from 'three';

class TestObject extends Component{
    render(){
        return (
            <mesh>
                <sphereBufferGeometry args = {[5, 10, 10]} attach = "geometry" />
                <meshStandardMaterial
                    color = {0xd2452b}
                    attach = "material"
                    side = {BackSide}
                    metalness = {0.4}
                />
            </mesh>
        );
    }
}

export default TestObject;