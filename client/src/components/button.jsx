import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    const nameText = document.getElementsByClassName('nameText')[0].value;
    const descriptionText = document.getElementsByClassName('descriptionText')[0].value;
    axios.post('http://localhost:3000/api/cows', { cowName: nameText, cowDescription: descriptionText })
      .then(() => this.props.fetchAll())
      .catch((err) => console.log('Error during post request from client'));


  }

  render() {
    return (
      <div>
        <input className='nameText' type='text' placeholder='name'></input>
        <input className='descriptionText' type='text' placeholder='description'></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

}

export default Button;