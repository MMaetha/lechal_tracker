import React, { Component } from 'react'
import Graph from './graph'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h1>LECHAL TRACKr</h1>
        </div>
        <Graph />
      </div>
    )
  }
}

export default Home;