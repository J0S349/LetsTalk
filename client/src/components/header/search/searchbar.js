import React, { Component } from 'react';
import './searchbar.css';
import SearchInput from 'react-search-input'

class SearchBarInput extends Component{

  render(){
    return(
      <SearchInput
        className="search-input"
        onChange={(data) => console.log('onChange', data)}
        onRequestSearch={() => console.log('onRequestSearch')}
     />
    );
  }
}

export default SearchBarInput;
