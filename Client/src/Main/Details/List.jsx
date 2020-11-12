import React, { Component } from 'react'
// const {fetchurl} = require('../../connection')
class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            hovered:false
        }
    }

    // async componentDidMount(){
    //     // let list = await fetchurl('/getres')
    //     // this.setState({list: list})
    // }

    render(){
        return(
            <ul
            onMouseEnter={()=>this.setState({hovered:true})}
            onMouseLeave ={()=>this.setState({hovered:false})}
            onClick = {()=>this.props.clicked(this.props.id+1 )}
            className= {'my-0 list-group-item'+ (this.state.hovered ? ' list-group-item-primary':'')}>
                {this.props.element}
            </ul>
        )
    }
}

export default List;