import React,{Component} from 'react'
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Listgroup extends Component{
    constructor(props){
        super(props)
        this.state={
            name: props.name,
            namelist: props.namelist
        } 
    }
    render(){
        return (
            <div id="{this.state.name}" className='h-50 m-1 p-2 border rounded' style={{background:'#FFFFFF'}}>
                <h1>{this.state.name}</h1>
                <List/>
            </div>
        )
    }
}