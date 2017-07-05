import React, { Component } from 'react';

class HeightBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
        <p>Value of the input: {this.state.term} cm.</p>
      </div>
    )
  }
}

export default HeightBar;
