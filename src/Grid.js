import React, { Component } from "react";
import GridBodyUp from "./GridBodyUp";
import GridBodyMid from "./GridBodyMid";
import GridBodyLow from "./GridBodyLow";

class Grid extends Component {
  render() {
    const { imgData } = this.props;

    return (
      <table>
        <tbody>
          <GridBodyUp imgData={imgData} />

          <GridBodyMid imgData={imgData} />

          <GridBodyLow imgData={imgData} />
        </tbody>
      </table>
    );
  }
}

export default Grid;
