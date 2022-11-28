import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import { useState } from 'react';
import React from 'react';
import Contain from './components/container';

class App extends React.Component{
  constructor(props){
    super(props)
      this.state={
        messages:[]
      
    }
    // console.log(this.state.messages)
  }
  // const[message,messages]=useState([])
     addd=(p)=>{
      
      console.log(p)
      this.setState({
        messages:[p,...this.state.messages]
      })
console.log(this.state.messages)
  }
delete=(id)=>{
    let v= this.state.messages.splice(id,1)
    let b=this.state.messages.filter((to)=>to!==v)
  this.setState({
    messages:b
  })
}
  render(){ 

    return(
   <>
   <div className='container  cont'>
   <Text messages={this.addd} />
   <Contain messages={this.state.messages} delete={this.delete}/>
   </div>

   </>
  )}
}

export default App;
