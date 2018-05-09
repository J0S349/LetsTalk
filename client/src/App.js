import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/main/dashboard';
import Header from './components/header/header';

class App extends Component {

  state = {
    response: '',
    data: {
      ID: "daf",
      Name: "OUT",
      Fullname: "OUT and Allies Network",
      Description: "The mission of the OUT & Allies Network (OUT) is to connect the experience of the LGBT community to BlackRock’s principles by promoting a culture where employees feel comfortable sharing their stories and bringing their genuine selves to work",
      Link: "https://webster.bfm.com/myblk/community/employee-networks/blackrock-out-network-out",
      DateCreated: "12/23/2018"
    }
  };

  componentDidMount(){
    this.callAPI()
        .then(res => this.setState({response: res.express }))
        .catch(err => console.log(err));

    this.postAPI()
        .then(res => console.log("response: ", res))
        .catch(err => console.log(err));
  }

  callAPI = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if ( response.status !== 200 ) throw Error(body.message);
    return body
  };

  postAPI = async () => {
    // fetch("/api/create_network", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify(this.state.data)}
    // )
    // .then((res) => {
    //   console.log("return response: ", res);
    // });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <Dashboard/>
        <p className="App-intro">{ this.state.response } </p>
      </div>
    );
  }
}

export default App;
