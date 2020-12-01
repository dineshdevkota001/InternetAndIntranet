import React,{useState, useContext} from 'react'
import Details from './Details/Details'
import ThreeContainer from './ThreeContainer';
import {SelectProvider} from './selectContext '

const Main = props =>{
    let [selection, setSelection] = useState({'mesh':'default.obj', 'image':'default.jpg'})
    
    return (
        <div className = 'container-fluid'>
            <div id='Main' className='row m-1 vh-90 fill-grow-1 justify-content-center verticen' >
                <SelectProvider value={{selection: selection ,setselection: setSelection}}>
                <Details />
                <ThreeContainer />
                
                </SelectProvider>
            </div>
        </div>
    );
}

export default Main;