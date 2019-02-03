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
import ScoreGrid from "./ScoreGrid";

class App extends Component {

  constructor(props) {

    super(props);

    //set initial state so that components load
    this.state = {

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
      ],

      loser: false

    };
  }
  
  //check state when component mounts
  componentDidMount() {

    console.log("MOUNT:", this.state);

  }

  //check state each time component update (state change)
  componentDidUpdate() {

    console.log("STATE UPDATED:", this.state);

  }

  //method to reset state but keep top score
  startGame = (top) => {

    this.setState({

      score: 0,

      topScore: top,
  
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
      ],

    });

  }

  //method to shuffle array of pics
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

  //event handler for clicks
  handleClick = event => {

    event.preventDefault();

    let click = event.target.id;

    //runs update click method to evaluate loss and shuffle
    this.updateClick(click);

  };

  changeArr(array, index) {

    let newScore = this.state.score;

    newScore++;

    array[index].clicked = true;

    this.shuffle(array);

    this.setState({

      picts: array,
      score: newScore

    });

    console.log("SHUFFLED", this.state);

  }

  updateClick = targ => {

    //parse id into num
    let numTarg = parseInt(targ);

    //current state array
    let arr = this.state.picts;

    //find corresponding obj within state array of all objs
    let selected = this.state.picts[numTarg];

    console.log(selected);

    //check if corresponding obj clicked val is false
    if (selected.clicked === false) {

      this.changeArr(arr, numTarg);

    } else {

      //else run lose game method
      this.loseGame();

    }

  };

  loseGame = () => {

    this.setState({

      loser: true

    });

    console.log("YOU LOSE", this.state);

    if (this.state.topScore < this.state.score) {

      this.startGame(this.state.score);

    } else {

      this.startGame(this.state.topScore)

    }

  };

  render() {

    let Loser = (props) => {

      console.log("LOSER PROPS", props);

      let message;

      if (props.loser === true) {

        message = <h1 style={{color: "red"}}>LOSER</h1>;

      } else {

        message = <span></span>;

      }

      return(

        <table>
          <tbody>
            <tr>
              <td>
                {message}
              </td>
            </tr>
          </tbody>
        </table>

      )

    }

    return (
      <div className="App-header fonts">
        <Loser loser={this.state.loser}/>
        <ScoreGrid score={this.state.score} topScore={this.state.topScore}/>
        <Grid imgData={this.state.picts} clickCheck={this.handleClick} />
      </div>
    );
  }

}

export default App;
