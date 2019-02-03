import React from 'react';

const Top = props => {

    console.log("TOP sCORE", props);

    return <tr><td>TOP SCORE: {props.topScore}</td></tr>

}

export default Top;