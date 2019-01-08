import React, { Component } from 'react';
import GridBody from './GridBody';

class Grid extends Component {

    render() {

        const {imgData} = this.props;

        return (

            <table>

                <GridBody imgData={imgData}/>

            </table>

        )

    }

}

export default Grid;