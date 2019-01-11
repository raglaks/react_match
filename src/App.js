import React, { Component } from 'react';
import Grid from './Grid';
import eye1 from './images/eye1.jpg';
import eye2 from './images/eye2.jpg';
import eye3 from './images/eye3.jpg';
import eye4 from './images/eye4.jpg';
import eye5 from './images/eye5.jpg';
import eye6 from './images/eye6.jpg';
import eye7 from './images/eye7.jpg';
import eye8 from './images/eye8.jpg';
import eye9 from './images/eye9.jpg';
import eye10 from './images/eye10.jpg';
import eye11 from './images/eye11.jpg';
import eye12 from './images/eye12.jpg';
import './App.css';

class App extends Component {

  state = {

    score: 0,

    topScore: 0,

    clicked: false

  };

  pics = [{pic: eye1}, {pic: eye2}, {pic: eye3}, {pic: eye4}, {pic: eye5}, {pic: eye6}, {pic: eye7}, {pic: eye8}, {pic: eye9}, {pic: eye10}, {pic: eye11}, {pic: eye12}];

  handleClick = event => {

    event.preventDefault();

    console.log("EVENT IS", event);

    this.setState({clicked: true});

    console.log(this.state);
    
  }

  render() {

    return (

      <div className="App-header">
      
        <Grid imgData={this.pics} clickCheck={this.handleClick}/>
      
      </div>

    );

  }
}

export default App;
