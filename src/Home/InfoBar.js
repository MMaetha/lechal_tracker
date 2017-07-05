import React, { Component } from 'react';
import SearchBar from './Searchbar'

class InfoBar extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchBar />
        <SearchBar />
      </div>
    )
  }
}

export default InfoBar;
