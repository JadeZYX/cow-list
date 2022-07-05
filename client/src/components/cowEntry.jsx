import React from 'react';
const axios = require('axios');

class CowEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleDelete(id,index){
    axios.delete('http://localhost:3000/api/cows/'+id)
    .then((result)=>(console.log('Delete request successfully complete from client')))
    .catch((err)=>(console.log('Delete failed from client')))
    .then(()=>this.props.handleDeleteLocall(index));
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.handleDisplay(this.props.description,this.props.name)}>
          {this.props.name}
        <button onClick={()=>this.handleDelete(this.props.id,this.props.index)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default CowEntry;