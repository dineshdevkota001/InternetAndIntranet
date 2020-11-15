import React from 'react'
import Details from './Details/Details'
import ThreeContainer from './ThreeContainer';

const Main = props =>{
    return (
        <div className = 'container-fluid'>
            <div id='Main' className='row m-1 vh-90 fill-grow-1 justify-content-center verticen' >
                <Details loggedIn={props.loggedIn}/>
                {//<ThreeContainer />
                }
            </div>
        </div>
    );
}

export default Main;