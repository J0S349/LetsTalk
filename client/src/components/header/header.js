import React, { Component } from 'react';
import SearchBarInput from './search/searchbar';
import {Container, Row, Col} from 'react-grid-system';
import MenuBar from './menu/menuBar';
import "./header.css";
class Header extends Component{
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <SearchBarInput/>
          </Col>
          <Col>
            <MenuBar/>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Header;
