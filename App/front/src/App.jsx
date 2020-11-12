import React, { Component } from 'react'
// Project imports
import Navigation from './Navigation/Navigation';
import Main from './Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css';

let {fetchurl} = require('./connection')

class App extends Component{
	
        constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        }

        async componentWillMount() {
            let url = "http://localhost:8000/testAPI"
            let res = await fetchurl(url);
            this.setState({apiResponse:res})
        }
            
        render() {
        return (
            <div id="root_of_app" className='vh100'>
                <Navigation/>
                <Main/>
                {this.apiResponse}
            </div>
        );
        }
}

export default App;