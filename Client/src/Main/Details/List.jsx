import React, { Component } from 'react'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
// const {get} = require('../../connection')

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }

    // async componentDidMount(){
    //     // let list = await fetchurl('/getres')
    //     // this.setState({list: list})
    // }

    render() {
        return (
            <ListGroupItem
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                onClick={() => this.props.clicked(this.props.id)}
                className={'my-0 list-group-item' + (this.state.hovered ? ' list-group-item-primary' : '') + (this.props.selected ? ' active' : '')}>
                {this.props.element}
            </ListGroupItem>
        )
    }
}

export default List;