import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/main/dashboard';
import Header from './components/header/header';

class App extends Component {

  state = {
    response: '',
    data: {
      Name: "ABN",
      Fullname: "Ability Network",
      Description: "The Ability Network (ABN) provides a sense of community, advocacy, resources, and support for all types of disability-related issues within the firm. This includes support for employees with a disability, whether visible or invisible, managers, those caring for a loved one, and anyone interested in supporting the disability community.",
      Link: "https://webster.bfm.com/myblk/community/employee-networks/ability-network",
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
