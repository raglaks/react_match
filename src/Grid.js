import React, { Component } from "react";
import GridBodyUp from "./GridBodyUp";
import GridBodyMid from "./GridBodyMid";
import GridBodyLow from "./GridBodyLow";

class Grid extends Component {
  render() {
    const { imgData } = this.props;
    const { clickCheck } = this.props;

    return (
      <table>
        <tbody>
          <GridBodyUp imgData={imgData} clickCheck={clickCheck}/>

          <GridBodyMid imgData={imgData} clickCheck={clickCheck}/>

          <GridBodyLow imgData={imgData} clickCheck={clickCheck}/>
        </tbody>
      </table>
    );
  }
}

export default Grid;
