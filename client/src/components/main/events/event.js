import React, { Component } from 'react';
import './event.css';

class Event extends Component{
  render(){
    let { event } = this.props;
    return(
      <button className="Events">
        <div>{ event.name }</div>
        <div>{ event.location }</div>
        <div>{ event.date }</div>
      </button>
    );
  }
}

export default Event;
