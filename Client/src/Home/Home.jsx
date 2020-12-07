import React,{useState} from 'react'
import Details from './Details/Details'
import ThreeContainer from './ThreeContainer';
import {SelectProvider} from './selectContext '

const Home = props =>{
    let [selection, setSelection] = useState({'mesh':'', 'image':''})
    
    return (
        <div className = 'container-fluid'>
            <div id='Home' className='row m-1 vh-90 fill-grow-1 justify-content-center verticen' >
                <SelectProvider value={{selection: selection ,setselection: setSelection}}>
                <Details />
                <ThreeContainer />
                
                </SelectProvider>
            </div>
        </div>
    );
}

export default Home;