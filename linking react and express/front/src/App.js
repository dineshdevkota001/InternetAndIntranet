import React, { Component } from 'react'
import Navigation from './Navigation/navbar';
import logo from './logo.svg';
import './App.css';

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
            <div className="App" id="root_of_app">
                <Navigation/>
            </div>
        );
        }
}

export default App;
