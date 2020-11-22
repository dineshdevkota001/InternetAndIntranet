import React, { Component } from 'react'
// Project imports
import Navigation from './Navigation/Navigation';
import Main from './Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css';

// let {get} = require('./connection')

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn : true
        }
    }
        render() {
        return (
            <div id="home" className='vh100' style={{maxHeight:'100vh'}}>
                <Navigation loggedIn={this.state.loggedIn}/>
                <Main loggedIn={this.state.loggedIn}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id='about'>
                    about section lives here
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
        }
}

export default App;