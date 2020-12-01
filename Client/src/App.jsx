import React, { useState } from 'react'
// Project imports
import Navigation from './Navigation/Navigation';
import Main from './Main/Main'
import {UserProvider} from './userContext'
import 'bootstrap/dist/css/bootstrap.min.css';

// let {get} = require('./connection')




const App =()=>{
    let [loggedIn,setloggedIn] = useState({login:true, username:'dinesh'})
    return (
            <div id="home" className='vh100' style={{maxHeight:'100vh'}}>
                <UserProvider value={{login:loggedIn, setlogin: setloggedIn}}>
                    <Navigation/>
                    <Main />
                </UserProvider>
                <div id='about'>
                    about section lives here
                </div>
            </div>
        );
}

export default App;