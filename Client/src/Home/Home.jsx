import React,{useState, useEffect} from 'react'
import Details from './Details/Details'
import ThreeContainer from './Three/ThreeContainer';
import {SelectProvider} from './selectContext '

const Home = props =>{
    let [selection, setSelection] = useState({'mesh':'default.obj', 'image':'default.jpg'})
    
    useEffect(() => {
        console.log('Home.jsx', selection)
       
    }, [selection])

    return (
        <div className = 'container-fluid'>
            <div id='Home' className='row fill-grow-1 justify-content-center' >
                <SelectProvider value={{selection: selection ,setselection: setSelection}}>
                    <Details />
                    <ThreeContainer />
                </SelectProvider>
            </div>
        </div>
    );
}

export default Home;