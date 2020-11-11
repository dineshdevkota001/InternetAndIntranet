import React, {Component} from 'react';
import * as THREE from 'three';

class ThreeViewer extends Component{
    componentDidMount() {
        //=== THREE JS CODE ===

        //=== END OF THREE JS CODE ===
    }
    render () {
        return <div ref = {ref => this.mount = ref}/>
    }
}