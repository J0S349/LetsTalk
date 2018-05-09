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
      networksData: jsonData['Networks'],
      postData: jsonData['Posts'],
      networkPostData: jsonData['NetworkPosts'],
      events: jsonData['Events'],
      communities: jsonData['Communities'],
      pendingEvents: jsonData['PendingEvents']
    }
  }
  render(){

    let { networksData, postData, events, communities, pendingEvents } = this.state;

    // Creating array of network names
    let networkNames = [];
    Object.keys(networksData).map((network) => {
        networkNames.push(network);
    });

    let communityNames = [];
    Object.keys(communities).map((network) => {
        communityNames.push(network);
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
        {Object.keys(networksData).map(function(network, i){
          let networkInfo = networksData[network];
          if(network === "MCN"){
            return <Route exact path={"/networks/"+network}><Networks networkInfo={networkInfo} pageType={"network"} posts={MCNPosts}/></Route>
          }else if(network === "WIN"){
            return <Route exact path={"/networks/"+network}><Networks networkInfo={networkInfo} pageType={"network"} posts={WINPosts}/></Route>
          }else{
            return <Route exact path={"/networks/"+network}><Networks networkInfo={networkInfo} pageType={"network"} posts={[]}/></Route>
          }
        })}
        {Object.keys(communities).map(function(index, i){
          let community = communities[index];

          if(index === "Python"){
            return <Route exact path={"/communities/"+index}><Networks networkInfo={community} pageType={"community"} posts={PythonPosts}/></Route>
          }else{
            return <Route exact path={"/communities/"+index}><Networks networkInfo={community} pageType={"community"} posts={[]}/></Route>
          }

          })
        }

      </Switch>
    );
  }
}

export default Dashboard;
