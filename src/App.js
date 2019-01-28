import React, { Component } from "react";
import Grid from "./Grid";
import eye1 from "./images/eye1.jpg";
import eye2 from "./images/eye2.jpg";
import eye3 from "./images/eye3.jpg";
import eye4 from "./images/eye4.jpg";
import eye5 from "./images/eye5.jpg";
import eye6 from "./images/eye6.jpg";
import eye7 from "./images/eye7.jpg";
import eye8 from "./images/eye8.jpg";
import eye9 from "./images/eye9.jpg";
import eye10 from "./images/eye10.jpg";
import eye11 from "./images/eye11.jpg";
import eye12 from "./images/eye12.jpg";
import "./App.css";

class App extends Component {
  state = {
    score: 0,

    topScore: 0,

    picts: [
      { pic: eye1, id: 0, clicked: false },
      { pic: eye2, id: 1, clicked: false },
      { pic: eye3, id: 2, clicked: false },
      { pic: eye4, id: 3, clicked: false },
      { pic: eye5, id: 4, clicked: false },
      { pic: eye6, id: 5, clicked: false },
      { pic: eye7, id: 6, clicked: false },
      { pic: eye8, id: 7, clicked: false },
      { pic: eye9, id: 8, clicked: false },
      { pic: eye10, id: 9, clicked: false },
      { pic: eye11, id: 10, clicked: false },
      { pic: eye12, id: 11, clicked: false }
    ]
  };

  componentDidMount() {

    console.log(this.state.picts);

  }

  shuffle = (arr) => {

      let currentIndex = arr.length;
      let temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
    
      return arr;

  }

  handleClick = event => {

    event.preventDefault();

    let click = event.target.id;

    this.updateClick(click);

  };

  updateClick = targ => {

    console.log(this.state);
    
    let numTarg = parseInt(targ);

    let selected = this.state.picts[numTarg];

    console.log(selected);

    console.log(selected.clicked);

    if (selected.clicked === false) {

      this.setState(prevState=>{

        prevState.picts[numTarg].clicked = true;
        prevState.score++;

      });

      //console.log(this.state);

      // this.setState(prevState=>{

      //   prevState.picts = this.shuffle(prevState.picts);

      // });

      //console.log("SHUFFLED?", this.state.picts);
      
    } else {
      this.loseGame();
    }

  };

  loseGame = () => {
    console.log("YOU LOSE");

    this.setState(prevState=>{

      prevState.topScore = prevState.score;

      prevState.score = 0;
      
      prevState.picts = [
        { pic: eye1, id: 0, clicked: false },
        { pic: eye2, id: 1, clicked: false },
        { pic: eye3, id: 2, clicked: false },
        { pic: eye4, id: 3, clicked: false },
        { pic: eye5, id: 4, clicked: false },
        { pic: eye6, id: 5, clicked: false },
        { pic: eye7, id: 6, clicked: false },
        { pic: eye8, id: 7, clicked: false },
        { pic: eye9, id: 8, clicked: false },
        { pic: eye10, id: 9, clicked: false },
        { pic: eye11, id: 10, clicked: false },
        { pic: eye12, id: 11, clicked: false }
      ]
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="App-header">
        <Grid imgData={this.state.picts} clickCheck={this.handleClick} />
      </div>
    );
  }
}

export default App;
