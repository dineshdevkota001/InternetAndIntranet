import React, { Component } from 'react'
// Project imports
import Navigation from './Navigation/Navigation';
import Main from './Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css';

// let {get} = require('./connection')

class App extends Component{


        // async componentDidMount() {
        //     let url = "/testAPI"
        //     let res = await get(url);
        //     this.setState({apiResponse:res})
        // }
            
        render() {
        return (
            <div id="root_of_app" className='vh100'>
                <Navigation/>
                <Main/>
            </div>
        );
        }
}

export default App;