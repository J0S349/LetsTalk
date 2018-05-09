import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';

import "./mainThread.css";

class MainThreadContent extends Component{
  render(){
    let { post } = this.props;
    return(
      <Container className="contentThread">
        <Row>
          <Col>
            <div>Posted on { post.network } page</div>
          </Col>
        </Row>
        <Row className="contentRow">
          <Col>
            <div className="contentData"> { post.Content }</div>
          </Col>
        </Row>
        <Row className="threadButtons">
          <Col>
            <button className="echoButton">Echo</button>
          </Col>
          <Col>
            <button className="commentButton">Comment</button>
          </Col>
        </Row>
      </Container>

      );
  }
}

export default MainThreadContent;
