import React, { Component } from 'react'
class List extends Component{

    returnlist = (details) =>{
        return (
        <ul>
            {details}
        </ul>
        );
    }

    render(){
        return(
            <div>
            {this.returnlist('list')}
            {this.returnlist('list')}
            {this.returnlist('goes')}
            {this.returnlist('here')}
                {this.returnlist('list')}
                {this.returnlist('list')}
                {this.returnlist('goes')}
                {this.returnlist('here')}
            </div>
        )
    }
}

export default List;