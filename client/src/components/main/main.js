import React, { Component } from 'react';
import MainThread from "./mainThread/mainThread";
import NetworkList from "./networkThreads/networkList";
import EventList from './events/eventList';
import "./main.css";
import {Container, Row, Col} from 'react-grid-system';
class Main extends Component{
  render(){
    let { networks, communities, posts, events } = this.props;
    console.log("Within main: ", this.props);
    return(
        <Container id="mainPage">
          <Row>
            <Col id="leftThread" md={3} xs={3}>
              <h2>Network Pages</h2>
              <NetworkList networks={networks} host={'networks'} type={'networks'}/>
              <h2>Community Pages</h2>
              <NetworkList networks={communities} host={'communities'}/>

            </Col>
            <Col id="mainThread" md={6} xs={6}>
              <MainThread placeholder="Should the SF office adopt an open floor plan?" isEnabled={ true } posts={ posts } submitText={"Submit for Polling"}/>
            </Col>
            <Col id="rightThread" md={3} xs={3}>
              <h2>Events</h2>
              <EventList events={ events } isPending={false}/>
            </Col>
          </Row>
        </Container>
      );
  }
}

export default Main;
