import React,{Component} from 'react'
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Listgroup extends Component{
    constructor(props){
        super(props)
        this.state={
            name: props.name,
            namelist: props.namelist,
            list: 'list is here now'.split(' ')
        } 
    }

    handleClick= (index) =>{
        console.log('clicked ',index)
    }
    render(){
        return (
            <div id="{this.state.name}" className='h-50 rounded shadow'>
                <h1 className='shadow-sm p-2'>{this.state.name}</h1>
                <div className='list-group'>
                {this.state.list.map((element,index) => 
                    <List 
                        key={index}
                        id = {index}
                        clicked = {this.handleClick}
                        element={element}/>
                    )}
                </div>
            </div>
        )
    }
}