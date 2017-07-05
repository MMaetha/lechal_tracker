import React, { Component } from 'react';

class WeightBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
        <p>Value of the input: {this.state.term} kg.</p>
      </div>
    )
  }
}

export default WeightBar;
