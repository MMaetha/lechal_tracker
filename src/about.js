import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
//import Chart from './graph';

//ReactDOM.render(<Chart />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header">
          <h1>LECHAL TRACKr</h1>
        </div>
        <div className="App-intro">
          <h3>What is LECHAL?</h3>
          <p>LECHAL is footwear smart device that can track your health, steps, calories and can guide you to have good health.</p>
      </div>
    );
  }
}

registerServiceWorker();
