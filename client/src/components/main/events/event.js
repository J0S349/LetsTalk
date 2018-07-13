import React, { Component } from 'react';
import './event.css';

class Event extends Component{
  render(){
    let { event } = this.props;
    return(
      <button className="Events">
        <div>{ event.Name }</div>
        <div>{ event.Location }</div>
      </button>
    );
  }
}

export default Event;
