import React,{Component} from 'react'
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css';

const {get} = require('../../connection')
export default class Listgroup extends Component{
    constructor(props){
        super(props)
        this.state={
            name: props.name,
            list: []
        } 
    }
    async componentDidMount(){
        let url = '/get'+this.state.name.toLowerCase()
        let res = await get(url)
        res = JSON.parse(res)
        this.setState({list: res.response})
    }
    handleClick= (index) =>{
        console.log('clicked ',this.state.name,index)
    }
    render(){
        return (
            <div id="{this.state.name}" className='h-50 my-5 p-2 rounded shadow'>
                <h1 className='shadow-sm my-1 p-2'>{this.state.name}</h1>
                <div className='list-group '>

                {this.state.list.map((element,index) => 
                    <List 
                        key={index}
                        id = {index}
                        clicked = {this.handleClick}
                        element={element.name}/>
                    )}

                </div>
            </div>
        )
    }
}