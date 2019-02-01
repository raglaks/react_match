import React from 'react';

const GridBodyLow = props => {

    let rows = props.imgData.map((row, index) => {

        //console.log("LOW", row);

        if (index >= 8) {

            if (index === 8 || index === 10) {

                return (

                    <td key={index}><img id={index} onClick={props.clickCheck} className="resize anti" src={row.pic} alt={index}></img></td>
    
                ) 

            } else {

                return (

                    <td key={index}><img id={index} onClick={props.clickCheck} className="resize clock" src={row.pic} alt={index}></img></td>
    
                )

            }

        }

        return rows;

    });

    return (

        <tr>{rows}</tr>

    )

}

export default GridBodyLow;