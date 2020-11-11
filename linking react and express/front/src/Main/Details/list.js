import React, { Component } from 'react'
class List extends Component{

    returnlist = (details) =>{
        return (
        <ul>
            details
        </ul>
        );
    }

    render(){
        return(
            <li>
                {this.returnlist('list')}
                {this.returnlist('list')}
                {this.returnlist('goes')}
                {this.returnlist('here')}
            </li>
        )
    }
}

export default List;