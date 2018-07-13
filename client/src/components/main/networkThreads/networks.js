import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MainThread from "../mainThread/mainThread";
import About from "../aboutPanel/about";
import "./networks.css";

class Networks extends Component{

  render(){
    console.log("network name: ", this.props);
    let { networkInfo, posts } = this.props;

    return(
      <Container id="mainPage">
        <Row>
          <Col xs={3} md={3}>
            <About name={networkInfo.Fullname}/>
          </Col>
          <Col xs={6} md={6}>
            <MainThread placeholder="What do you want to talk about?" name={networkInfo.Name} isEnabled={true} posts={posts} submitText={"Post"}/>
          </Col>
          <Col xs={3} md={3}>
            <h2 id="missionStatement">Our Mission</h2>
            <span>{networkInfo.Description}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Networks;
