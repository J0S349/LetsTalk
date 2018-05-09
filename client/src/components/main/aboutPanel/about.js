import React, { Component } from "react";
import './about.css';
class About extends Component {
  render(){
    let { name } = this.props;
    console.log("Network name: ", name);
    return(
      <div>
        <h1 id="networkName"> { name } </h1>
        <h2>Posts</h2>
        <h2>Board Member</h2>
      </div>

    );
  }
}

export default About;
