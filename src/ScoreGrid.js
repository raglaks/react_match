import React, { Component } from "react";
import Top from "./Top";
import Score from "./Score";

class ScoreGrid extends Component{

    constructor(props) {

        super(props);
    
        this.state = {
    
          score: 0,
          topScore: 0
    
        };
      }

      componentDidMount(){

        this.setState({
    
          score: this.props.score,
          topScore: this.props.topScore
    
        });
    
      }

      componentWillReceiveProps(nextProps) {
        console.log("NEW PROPS BRO", nextProps);
    
        this.setState({

            score: nextProps.score,
            topScore: nextProps.topScore
    
        });
    
      }

      render() {

        return(

            <table>
                <tbody>
                    <Top topScore={this.state.topScore}/>
                    <Score score={this.state.score}/>
                </tbody>
            </table>

        )

      }

}

export default ScoreGrid;