import React from 'react';
import CowEntry from './CowEntry.jsx';

class CowList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.list.map((ele,index)=>(<CowEntry name={ele.cowName} description={ele.cowDescription} key={ele.cowId} id={ele.cowId}
        index={index}
        fetchAll={this.props.fetchAll}
        handleDeleteLocall={this.props.handleDeleteLocall}
        handleDisplay={this.props.handleDisplay}
        />))}
      </div>
    )
  }

}

export default CowList;