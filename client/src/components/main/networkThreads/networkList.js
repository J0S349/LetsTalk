import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./networks.css";

class NetworkList extends Component{

  render(){
    let { networks, host } = this.props
    return(
      <div>
        <nav>
          {networks.map(function(network, i){
            return <div className="networkList"><Link to={"/"+host+"/"+network}><button class='networkButtons'>{ network }</button></Link></div>
          })}
        </nav>
      </div>
    );
  }
}

export default NetworkList;
