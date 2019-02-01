import React from 'react';

const GridBodyMid = props => {

    let rows = props.imgData.map((row, index) => {

        //console.log("MID", row);

        if (index >= 4 && index <= 7) {

            if (index === 5 || index === 7) {

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

export default GridBodyMid;