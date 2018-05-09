import React, { Component } from 'react';
import Event from './event';
import './event.css';
class EventList extends Component {
  render(){
    let { events, isPending } = this.props;
    return(
      <div>
      {Object.keys(events).map((data) => {
        let event = events[data];
        return <div className="eventList"><Event event={ event } isPending={ isPending }/> </div>
        })
      }
      </div>
    );
  }
}

export default EventList;
