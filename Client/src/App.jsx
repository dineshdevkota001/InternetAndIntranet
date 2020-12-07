import React, { useState, useEffect } from 'react'
// Project imports
import Navigation from './Navigation/Navigation';
import Home from './Home/Home'
import About from './About/About'
import {UserProvider} from './userContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
const { localhost, withAuth } = require('./connection')
// let {get} = require('./connection')




const App =()=>{
    let [loggedin,setloggedin] = useState(false)
    let [username, setusername] = useState('')
    let [page,setpage] = useState('Home')
    useEffect(() => {
        document.title = 'Vie3'
        setusername(localStorage.getItem('username'))
        
              axios.get(localhost + '/api/user', withAuth).then(res => {
                console.log('localhost check', res)
                if (res.status === 200) {
                  setloggedin(true)
                }
                else {
                  setloggedin(false)
                }
              }).catch(error => {
                console.log(error.response)
              });
              // eslint-disable-next-line react-hooks/exhaustive-deps
            
    }, [])
    return (
            <div id="root" className='vh100' style={{maxHeight:'100vh'}}>
                <UserProvider value={{loggedin:loggedin, setlogin: setloggedin, user:username, setuser:setusername}}>
                    <Navigation page={page} setpage={setpage}/>
                    {page ==='Home' && <Home />}
                    {page==='About' && <About/>}
                </UserProvider>
            </div>
        );
}

export default App;