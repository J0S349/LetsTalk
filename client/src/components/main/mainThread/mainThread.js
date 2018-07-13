import React, { Component } from 'react';
import Post from "../Post/post";
import './mainThread.css';
import autoBind from 'react-autobind';
import MainThreadContent from './mainThreadContent';

class MainThread extends Component{

  constructor(props){
    super(props);
    autoBind(this);
  }

  displayData(posts){
    if(posts != null && posts.length > 0){
      return Object.keys(posts).map((data)=>{
        let post = posts[data];
        return <div className="threadList"><MainThreadContent post={post}/></div>
      });
    }else {
      return <div><h2>No Content to display</h2></div>
    }
  }

  render(){
    let { placeholder, isEnabled, posts, submitText, name } = this.props;
    return(
      <div>
        <div id="post">
          <Post placeholder={placeholder} name={name} isEnabled={isEnabled} submitText={submitText}/>
        </div>
        <div id="thread">
          { this.displayData(posts) }
        </div>
      </div>
    );
  }
}

export default MainThread;
