import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {Link } from 'react-router-dom';
import './menuBar.css';
import calendar from '../../../assets/calendar.png';
import notify from '../../../assets/notify.png';
import home from '../../../assets/home.png';
import survey from '../../../assets/survey.png';
import network from '../../../assets/network.png';
import settings from '../../../assets/settings.png';


class MenuBar extends Component {

  render(){
    return(
      <Container>
        <Row>
          <Col><Link to="/"><img alt='Home'src={home}/></Link></Col>
          <Col><img alt='Survey' src={survey}/></Col>
          <Col><img alt='Notifications' src={notify}/></Col>
          <Col><img alt='Calendar' src={calendar}/></Col>
          <Col><img alt='Networks' src={network}/></Col>
          <Col><img alt='Settings' src={settings}/></Col>
        </Row>
      </Container>
    )
  }
}

export default MenuBar;
