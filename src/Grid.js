import React, { Component } from "react";
import GridBodyUp from "./GridBodyUp";
import GridBodyMid from "./GridBodyMid";
import GridBodyLow from "./GridBodyLow";

class Grid extends Component {

  constructor(props) {

    super(props);

    this.state = {

      picts: [],
      func: {}

    };
  }

  componentDidMount(){

    this.setState({

      picts: this.props.imgData,

    });

  }

  componentDidUpdate() {

    console.log("GRID STATE UPDATED", this.state.picts);

  }

  componentWillReceiveProps(nextProps) {
    console.log("NEW PROPS BRO", nextProps);

    this.setState({

      picts: nextProps.imgData

    });

  }

  render() {

    return (

        <table>
          <tbody>
            <GridBodyUp imgData={this.state.picts} clickCheck={this.props.clickCheck}/>

            <GridBodyMid imgData={this.state.picts} clickCheck={this.props.clickCheck}/>

            <GridBodyLow imgData={this.state.picts} clickCheck={this.props.clickCheck}/>
          </tbody>
        </table>

    );
  }
}

export default Grid;
