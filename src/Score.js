import React from 'react';

const Score = props => {

    console.log("SCORE", props);

    return <tr><td>SCORE: {props.score}</td></tr>

}

export default Score;