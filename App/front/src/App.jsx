import React, { Component } from 'react'
import Navigation from './Navigation/Navigation';
import Main from './Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
	
        constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        }

        callAPI() {
            fetch("http://localhost:8000/testAPI")
                .then(res => res.text())
                .then(res => this.setState({ apiResponse: res }));
            }

        componentWillMount() {
            this.callAPI();
            }
            
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