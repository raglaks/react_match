import React from 'react';

const GridBodyUp = props => {

    const rows = props.imgData.map((row, index) => {

        if (index <= 3) {

            return (

                <td key={index}><img className="resize App-logo" src={row.pic} alt={index}></img></td>

            )

        } 

    });

    return (

        <tbody>{rows}</tbody>

    )

}

export default GridBodyUp;