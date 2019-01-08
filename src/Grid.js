import React, { Component } from 'react';
import GridBodyUp from './GridBodyUp';
import GridBodyMid from './GridBodyMid';
import GridBodyLow from './GridBodyLow';

class Grid extends Component {

    render() {

        const {imgData} = this.props;

        return (

            <table>

                <tr>

                    <GridBodyUp imgData={imgData}/>

                </tr>

                <tr>

                    <GridBodyMid imgData={imgData}/>

                </tr>

                <tr>

                    <GridBodyLow imgData={imgData}/>

                </tr>

                
            </table>

        )

    }

}

export default Grid;