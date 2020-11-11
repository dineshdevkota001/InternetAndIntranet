import React, {Component} from 'react';
// import * as THREE from 'three';

export default class ThreeViewer extends Component{
    componentDidMount() {
        //=== THREE JS CODE ===

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