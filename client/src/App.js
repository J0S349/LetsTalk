import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/main/dashboard';
import Header from './components/header/header';

class App extends Component {

  state = {
    response: '',
    data: {
      Name: "WIN",
      Fullname: "Women's Initiative Network",
      Description: "The Women’s Initiative Network (WIN) was founded in 2006 with a single mission: to contribute to the success of the firm by engaging and fostering the full potential of BlackRock women. WIN has made it a priority to engage women around the world to build an inclusive community, invest in each other’s growth and celebrate diverse perspectives in order to help bridge the gender gap at all levels, including senior leadership roles.",
      Link: "https://webster.bfm.com/myblk/community/employee-networks/blackrock-womens-initiative-network-win"
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
    fetch("/api/add_post", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state.data)}
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
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
