import React, { Component } from 'react';
import AgeBar from './ageBar'
import HeightBar from './heightBar'
import WeightBar from './weightBar'

class InfoBar extends Component {
  render() {
    return (
      <div>
        <AgeBar />
        <HeightBar />
        <WeightBar />
      </div>
    )
  }
}

export default InfoBar;
