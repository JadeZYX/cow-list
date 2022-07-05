import React from 'react';
const axios = require('axios');
import CowList from './cowList.jsx';
import Button from './button.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      displayName:'',
      displayText:''
    }
    this.fetchAll=this.fetchAll.bind(this);
    this.handleDeleteLocall=this.handleDeleteLocall.bind(this);
    this.handleDisplay=this.handleDisplay.bind(this);
  }

  handleDisplay(text,name){
   this.setState({displayText:text,displayName:name});
  }

  handleDeleteLocall(index){
    this.setState({list:
      [
        ...this.state.list.slice(0,index),
        ...this.state.list.slice(index+1)
      ]
    });
  }

  fetchAll(){
    axios.get('http://localhost:3000/api/cows')
    .then((response)=>(this.setState({list:response.data})))
    .catch((err)=>console.log('Error during get request from client'))
  }

  componentDidMount(){
    this.fetchAll();
  }

  render(){
    return (
      <div>
        <h1>Cow List</h1>
        <div>
          <p>{this.state.displayName}</p>
          <p>{this.state.displayText}</p>
       </div>
        <CowList
        list={this.state.list}
        fetchAll={this.fetchAll}
        handleDeleteLocall={this.handleDeleteLocall}
        handleDisplay={this.handleDisplay}
        />
        <Button
        fetchAll={this.fetchAll}
        />
      </div>
    )
  }

}

export default App;