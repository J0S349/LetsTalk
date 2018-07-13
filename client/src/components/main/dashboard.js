import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Networks from './networkThreads/networks';
import Main from "./main";
import jsonData from "../../data.json";
class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: jsonData,
      networksData: "",
      postData: jsonData['Posts'],
      networkPostData: jsonData['NetworkPosts'],
      events: "",
    }
  }

  componentDidMount(){
    this.getNetworks()
        .then(res => this.setState({networksData: res.data}))
        .catch(err => alert(err));

    this.getEvents()
        .then(res => this.setState({ events: res.data }))
        .catch(err => console.error(err));

  }

  getNetworks = async() => {
    const response = await fetch('/api/get_networks')
    const body = await response.json()

    if (response.status !== 200 ) throw Error(body.message)
    return body
  }

  getEvents = async() => {
    const response = await fetch('/api/get_events');
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)
    return body 
  }

  render(){

    let { networksData, postData, events, communities, pendingEvents, returnData } = this.state;
    // Creating array of network names
    let networkNames = [];
    let communityNames = [];
    Object.keys(networksData).map((index) => {
      let network = networksData[index]

      if(network.Type == "Network")
        networkNames.push(network.Name);
      else 
        communityNames.push(network.Name);
    });


    // Getting public Post
    let publicPost = [];
    let MCNPosts = [];
    let PythonPosts = [];
    let WINPosts = [];

    Object.keys(postData).map((index) => {
      let post = postData[index];
      if(post.isPublic){

        if(post.network === "MCN"){
          MCNPosts.push(post);
        }else if(post.network === "Python"){
          PythonPosts.push(post);
        }else if(post.network === "WIN"){
          WINPosts.push(post);
        }
        publicPost.push(post);
      }

    });


    return(
      <Switch>
        {/* Default goes to main page*/}
        <Route exact path="/">
          <Main networks={networkNames} communities={communityNames} posts={publicPost} events={ events } pendingEvents={ pendingEvents }/>
        </Route>
        {
          Object.keys(networksData).map(function(index, i){
            let networkInfo = networksData[index];
            if( networkInfo.Type === "Network")
              return <Route exact path={"/networks/"+networkInfo.Name }><Networks networkInfo={networkInfo} pageType={"network"} posts={[]}/></Route>
            else
              return <Route exact path={"/communities/"+networkInfo.Name }><Networks networkInfo={networkInfo} pageType={"community"} posts={[]}/></Route>

          })
        }

      </Switch>
    );
  }
}

export default Dashboard;
