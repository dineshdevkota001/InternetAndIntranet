import React, { Component } from 'react'
const {fetchurl} = require('../../connection')
class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    async componentDidMount(){
        let list = await fetchurl('/getres')
        this.setState({list: list})
    }

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